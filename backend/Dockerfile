FROM python:3.6.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN pip install pipenv
COPY Pipfile* / 
RUN pipenv lock --requirements > requirements.txt
RUN pip install -r requirements.txt
COPY . /app

ENTRYPOINT [ "flask" ]
CMD ["run", "--host=0.0.0.0", "--port=5000"]