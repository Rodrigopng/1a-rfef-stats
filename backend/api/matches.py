from flask import Blueprint

matches_api = Blueprint("matches_api", __name__)

@matches_api.route("/matches")
def list_matches():
    return {"message": "list matches endpoint"}
