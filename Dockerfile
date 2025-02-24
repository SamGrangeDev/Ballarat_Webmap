# Use the official Node.js LTS (Long Term Support) slim image for a lightweight container
FROM node:18-alpine

# Set the working directory inside the container to /V3
WORKDIR /V3

# Install 'serve' globally to serve static files
RUN npm install -g serve

# Copy only the necessary static files to leverage Docker cache
COPY index.html /V3/
COPY styles /V3/styles
COPY resources /V3/resources
COPY layers /V3/layers
COPY images /V3/images
COPY webfonts /V3/webfonts
COPY streetview /V3/streetview

# Set the PORT environment variable with a default value
ENV PORT=8080

# Expose the specified port
EXPOSE 8080

# Start the server using 'serve' to serve static files on the specified port
CMD ["sh", "-c", "serve -s . -l $PORT"]
