FROM python:3.11.4

WORKDIR /server

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY ./server .

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "9085"]