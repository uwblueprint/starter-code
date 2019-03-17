from backend import server

app = server.create_app()

if __name__ == '__main__':
    app.run()
