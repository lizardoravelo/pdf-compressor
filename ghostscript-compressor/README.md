# 📦 Ghostscript PDF Compressor

A simple Node.js + Ghostscript CLI tool that compresses PDF files locally inside a Docker container. Ideal for reducing PDF size for uploads, email, or storage.

---

## 🚀 Features

- Uses [Ghostscript](https://www.ghostscript.com/) under the hood
- Automatically strips metadata, downscales images, and compresses fonts
- Supports two compression levels: basic and mega
- Runs inside Docker — works on any OS (Mac, Windows, Linux)
- Outputs a new compressed PDF file next to your original

---

## 🧱 Requirements

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

---

## 📁 Folder Structure

```
ghostscript-compressor/
├── compress.js          # The compression script
├── sample.pdf           # Your input PDF (can rename)
├── package.json         # Node dependencies and scripts
├── Dockerfile           # Defines the container
├── README.md            # You're here!
```

---

## ⚙️ How to Use

### 1. Place your input PDF in this folder

Rename it to `sample.pdf` or modify `compress.js` to use your preferred filename.

---

### 2. Build the Docker image

```bash
docker build -t ghostscript-compressor .
```

---

### 3. Run the container

By default, this runs the **basic** compression:

```bash
docker run --rm -v ${PWD}:/app ghostscript-compressor
```

---

## 🧪 Choose Compression Mode

You can select between two modes:

```bash
npm run compress-basic    # Fast, decent compression
npm run compress-mega     # Very aggressive compression (~smallest size)
```

Or override the Docker default:

```bash
docker run --rm -v ${PWD}:/app ghostscript-compressor npm run compress-mega
```

### Output files:

- `compressed_basic.pdf`
- `compressed_mega.pdf`

---

## 🧠 Customization

To tweak compression settings (resolution, quality, grayscale), open `compress.js` and edit the Ghostscript flag arrays under `flagSets`.

---

## 🧑‍💻 Credits

Created by [Julio Lizardo](https://github.com/lizardoravelo)  
PDF compression powered by Ghostscript  
Containerized via Docker

---

## 🪪 License

MIT
