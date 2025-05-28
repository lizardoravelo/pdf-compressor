FROM node:20-slim

# Install tools
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends poppler-utils imagemagick && \
    rm -rf /var/lib/apt/lists/*

# Fix ImageMagick security policy to allow PDF output
RUN sed -i 's/rights="none" pattern="PDF"/rights="read|write" pattern="PDF"/' /etc/ImageMagick-6/policy.xml

# Set up app
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# Run script
CMD ["npm", "run", "compress"]
