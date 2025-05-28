# Use slim Node base (easier to manage Ghostscript + apt)
FROM node:20-slim

# Install Ghostscript with minimal system packages and clean up
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends ghostscript && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Copy package.json and install deps
COPY package.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Run the compression script
CMD ["npm", "run", "compress-basic"]
