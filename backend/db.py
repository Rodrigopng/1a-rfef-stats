import psycopg2
import os
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv("variables.env")
DB_CONFIG = {
    "host": os.getenv("DB_HOST", "localhost"),
    "port": os.getenv("DB_PORT", 5433),
    "dbname": os.getenv("DB_NAME", "1a_rfef_stats"),
    "user": os.getenv("DB_USER", "postgres"),
    "password": os.getenv("DB_PASSWORD", "")
}

def get_connection():
    return psycopg2.connect(
        cursor_factory=RealDictCursor,
        **DB_CONFIG
    )
