# Use Python 3.10 slim image for Railway deployment
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install system dependencies for building Python packages
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for better caching
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir --upgrade pip setuptools wheel && \
    pip install --no-cache-dir -r requirements.txt

# Copy the backend code to /app/backend
COPY . /app/backend

# Set Python path to include parent directory for imports
ENV PYTHONPATH=/app

# Change to backend directory
WORKDIR /app/backend

# Expose port (Railway will override with $PORT)
EXPOSE 8000

# Run the application
CMD uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}
