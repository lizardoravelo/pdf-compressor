# 🖼️ Rasterizer PDF Compressor

A high-compression, image-based PDF compressor that rasterizes each page into grayscale JPEGs and reassembles them into a compact PDF using ImageMagick.

---

## 🚀 Features

- Converts each page of the PDF to a low-res grayscale JPEG
- Rebuilds a new PDF from those images
- Optimized for file size — not interactivity
- Great for email attachments, form uploads, or scanning-style use cases

---

## 🧱 Requirements

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

---

## 📁 Folder Structure

```
rasterizer-compressor/
├── compress.js          # The rasterization logic
├── sample.pdf           # Input PDF to be compressed
├── package.json         # Node script + dependencies
├── Dockerfile           # Dockerized tool definition
├── README.md            # You're here!
```

---

## ⚙️ How to Use

### 1. Place your input PDF in this folder

Rename it to `sample.pdf` or modify the script to use your preferred file.

---

### 2. Build the Docker image

```bash
docker build -t rasterizer-compressor .
```

---

### 3. Run the container

```bash
docker run --rm -v ${PWD}:/app rasterizer-compressor
```

---

## 📦 Output

- 🗎 `rasterized_compressed.pdf`
- No selectable text or form fields
- File size can be reduced **well below 5MB**, often 1–3MB

---

## 🔧 Customize

Edit `compress.js` to:
- Adjust image quality (`quality=40`)
- Set output resolution (`-resize 1500x`, `-density 100`)
- Switch from grayscale to monochrome for even smaller files

---

## 🧑‍💻 Created by

**Julio Lizardo**  
[GitHub](https://github.com/lizardoravelo)

---

## 🪪 License

MIT
