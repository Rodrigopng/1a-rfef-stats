from flask import Blueprint, jsonify
from services.team_service import list_teams

teams_api = Blueprint("teams_api", __name__)

@teams_api.get("/teams")
def api_list_teams():
    teams = list_teams()
    grupo_uno = []
    grupo_dos = []
    for team in teams:
        if team["group"] == 1:
            grupo_uno.append(team)
        elif team["group"] == 2:
            grupo_dos.append(team)
    teams_dict = {"Grupo 1" : grupo_uno, "Grupo 2": grupo_dos}
    return jsonify(teams_dict)
