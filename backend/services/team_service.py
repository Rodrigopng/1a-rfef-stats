from db import get_connection
from pathlib import Path

# Path to queries folder
SQL_DIR = Path(__file__).resolve().parents[1] / "queries" / "teams"

def list_teams():
    sql_path = SQL_DIR / "list_teams.sql"
    sql = sql_path.read_text()

    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(sql)
            rows = cur.fetchall()
    return [
        {
            "name": r['name'],
            "short": r['short'],
            "icon": r['icon'],
            "group": r['group_number']
        }
        for r in rows
    ]
