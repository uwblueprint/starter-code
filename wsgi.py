from backend import server

app = server.create_app()

if __name__ == '__main__':
    app.run(host='0.0.0.0', post=5000)
