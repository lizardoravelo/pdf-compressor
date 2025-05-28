# 🧾 PDF Compressor Project

A Dockerized dual-tool project that provides two powerful options for compressing PDF files using Node.js and popular open-source tools.

---

## 📦 What's Inside

This project contains two separate tools for different use cases:

### 📁 `ghostscript-compressor/`

A PDF compressor based on **Ghostscript**, which:
- Retains all original content (text, forms, links)
- Compresses fonts and downscales images
- Offers two modes: `basic` and `mega`
- Great for uploading forms, reports, or documents with selectable text

👉 Use when: you want the **original structure preserved**

---

### 📁 `rasterizer-compressor/`

A compression tool that:
- Converts each PDF page into a grayscale image
- Recombines images into a flat PDF using ImageMagick
- Achieves ultra-high compression, even under strict file limits
- No selectable text (like a scanned document)

👉 Use when: **file size** matters more than **interactivity**

---

## 🐳 Requirements

- Docker Desktop installed and running
- Optional: Node.js locally if you want to run scripts outside Docker

---

## ⚙️ How to Use

Each folder has its own:
- `compress.js`: the main script
- `Dockerfile`: builds the tool in a container
- `README.md`: folder-specific instructions
- `sample.pdf`: you replace this with your file

---

## ✅ Quick Start

**Compress using Ghostscript (basic mode):**
```bash
cd ghostscript-compressor
docker build -t ghostscript-compressor .
docker run --rm -v ${PWD}:/app ghostscript-compressor
```

**Compress using Rasterizer (image-based):**
```bash
cd rasterizer-compressor
docker build -t rasterizer-compressor .
docker run --rm -v ${PWD}:/app rasterizer-compressor
```

---

## 🧑‍💻 Created by

**Julio Lizardo**  
[GitHub](https://github.com/lizardoravelo)

---

## 🪪 License

MIT
