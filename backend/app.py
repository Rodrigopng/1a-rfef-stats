from flask import Flask, jsonify
from flask_cors import CORS
from db import get_connection
from api.teams import teams_api
from api.matches import matches_api
import os
from dotenv import load_dotenv


app = Flask(__name__)

load_dotenv()
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")
CORS(app, origins=[FRONTEND_URL])

# Register routes
app.register_blueprint(teams_api)

@app.route("/")
def home():
    return {"message": "Football Stats API running"}

if __name__ == "__main__":
    app.run(debug=True)
