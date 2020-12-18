FROM python:3.7

WORKDIR /app

RUN pip install pipenv
COPY Pipfile* ./ 
RUN pipenv install

COPY . /app

EXPOSE 5000
ENTRYPOINT [ "pipenv", "run", "flask", "run", "--host=0.0.0.0", "--port=5000" ]
