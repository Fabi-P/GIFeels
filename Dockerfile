FROM python:3.10-slim-bookworm

WORKDIR /app

COPY requirements.txt .

RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]