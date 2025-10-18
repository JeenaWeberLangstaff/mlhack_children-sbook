from google import genai
import base64
import os
import tkinter as tk
from tkinter import messagebox

# The client gets the API key from the environment variable `GEMINI_API_KEY`.
client = genai.Client()

response = client.models.generate_content(
    model="gemini-2.5-flash", 
    contents="Explain how AI works in a few words"
)
user_prompt = input("Enter a short idea or theme for a children's story: ").strip()
if not user_prompt:
    user_prompt = "a friendly dragon who learns to share"

prompt = (
    f"Write a short, delightful children's story (4-6 paragraphs) for ages 4-8 "
    f"about: {user_prompt}. Use simple language, positive themes, gentle conflict, "
    "and a clear, reassuring resolution."
)

# Generate the story now so we can create illustrations from it
story_resp = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=prompt
)

# Extract story text robustly
story_text = getattr(story_resp, "text", None) \
    or getattr(story_resp, "output_text", None) \
    or (story_resp.data[0].text if getattr(story_resp, "data", None) else None) \
    or str(story_resp)

# Prepare simple paragraph splitting (4-6 paragraphs expected)
paragraphs = [p.strip() for p in story_text.split("\n\n") if p.strip()]
if not paragraphs:
    # fallback to splitting by single newlines
    paragraphs = [p.strip() for p in story_text.split("\n") if p.strip()]

# Generate one illustration per paragraph (limit to first 6)

os.makedirs("story_images", exist_ok=True)
saved_files = []

for i, para in enumerate(paragraphs[:6]):
    img_prompt = (
        f"Illustration for a children's book (ages 4-8): {para} "
        "Create a single clear scene, friendly characters, warm colors, soft outlines, "
        "no text in the image, high-contrast simple shapes, suitable for printing at 1024x1024."
    )

    try:
        img_resp = client.images.generate(
            model="image-bison-1",
            prompt=img_prompt,
            size="1024x1024"
        )

        # robust extraction of base64 image payload from several SDK response shapes
        b64 = None
        img_bytes = None

        # If response has .data attribute and it's non-empty
        if getattr(img_resp, "data", None):
            item = img_resp.data[0]
            # handle both attribute-style and dict-style items
            if isinstance(item, dict):
                b64 = item.get("b64_json") or item.get("b64") or item.get("image") or item.get("b64_bytes")
            else:
                b64 = getattr(item, "b64_json", None) or getattr(item, "b64", None) or getattr(item, "image", None)

        # If response is list-like or indexable
        if not b64:
            try:
                first = img_resp[0]
            except Exception:
                first = None
            if first is not None:
                if isinstance(first, dict):
                    b64 = first.get("b64_json") or first.get("b64") or first.get("image") or first.get("b64_bytes")
                else:
                    b64 = getattr(first, "b64_json", None) or getattr(first, "b64", None) or getattr(first, "image", None)

        # Some SDKs return the image as raw bytes under attributes like 'image' or 'b64_bytes'
        if img_bytes is None and hasattr(img_resp, "image") and isinstance(img_resp.image, (bytes, bytearray)):
            img_bytes = bytes(img_resp.image)
        if img_bytes is None and getattr(img_resp, "b64_bytes", None):
            maybe = img_resp.b64_bytes
            img_bytes = maybe if isinstance(maybe, (bytes, bytearray)) else base64.b64decode(maybe)

        # If we have base64 string, decode it (strip data URI prefix if present)
        if img_bytes is None:
            if not b64:
                raise ValueError(f"No base64 image data found in response: {repr(img_resp)}")
            if isinstance(b64, str) and b64.startswith("data:"):
                b64 = b64.split(",", 1)[1]
            img_bytes = base64.b64decode(b64)

        filename = os.path.join("story_images", f"story_image_{i+1}.png")
        with open(filename, "wb") as f:
            f.write(img_bytes)
        saved_files.append(filename)
    except Exception as e:
        # If an image can't be generated, record the error and continue
        root = tk.Tk()
        root.withdraw()  # hide main window
        messagebox.showwarning("Image generation failed", f"Failed to generate image {i+1}: {e}")
        root.destroy()
        continue

if saved_files:
    print("Saved illustrations:", ", ".join(saved_files))
else:
    print("No illustrations were saved.")

# Set prompt to the generated story so the later code can still print or re-generate if desired
prompt = story_text

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=prompt
)

print(response.text)