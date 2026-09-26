FROM python:3.12-slim

WORKDIR /app

COPY services/inventory/pyproject.toml ./
COPY services/inventory/inventory ./inventory

EXPOSE 8000

CMD ["python", "-c", "from inventory.hello import hello; print(hello())"]
