import os
from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# --- DATABASE PATH FIX ---
# Ye current file (main.py) ka folder pata karega
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Sahi jagah par database file banayega
DB_NAME = os.path.join(BASE_DIR, "database", "studio.db")

def init_db():
    # Folder check karein, agar nahi hai to banayein
    db_folder = os.path.dirname(DB_NAME)
    if not os.path.exists(db_folder):
        os.makedirs(db_folder)

    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS packages (id INTEGER PRIMARY KEY, name TEXT, price TEXT, features TEXT)''')
    c.execute('''CREATE TABLE IF NOT EXISTS bookings (id INTEGER PRIMARY KEY, name TEXT, mobile TEXT, event_type TEXT, event_date TEXT, package TEXT)''')
    
    # Check if packages exist
    c.execute('SELECT count(*) FROM packages')
    if c.fetchone()[0] == 0:
        pkgs = [
            ('Bronze', '₹15,000', '4 Hours Coverage, 50 Edited Photos'),
            ('Silver', '₹35,000', 'Full Day Photo + Video, Teaser'),
            ('Gold', '₹75,000', 'Drone, Cinematic Film, Luxury Album')
        ]
        c.executemany('INSERT INTO packages (name, price, features) VALUES (?,?,?)', pkgs)
        conn.commit()
    conn.close()
    print(f"✅ Database Connected: {DB_NAME}")

def get_db_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/packages', methods=['GET'])
def get_packages():
    conn = get_db_connection()
    rows = conn.execute('SELECT * FROM packages').fetchall()
    conn.close()
    return jsonify([dict(ix) for ix in rows])

@app.route('/api/book', methods=['POST'])
def book_event():
    data = request.json
    conn = get_db_connection()
    conn.execute('INSERT INTO bookings (name, mobile, event_type, event_date, package) VALUES (?,?,?,?,?)',
                 (data['name'], data['mobile'], data['event_type'], data['event_date'], data['package']))
    conn.commit()
    conn.close()
    return jsonify({"message": "Success"})

@app.route('/api/admin/bookings', methods=['GET'])
def get_bookings():
    conn = get_db_connection()
    rows = conn.execute('SELECT * FROM bookings ORDER BY id DESC').fetchall()
    conn.close()
    return jsonify([dict(ix) for ix in rows])

if __name__ == '__main__':
    init_db()
    app.run(port=5000, debug=True)
