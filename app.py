from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Data project (bisa ditambah sesukamu)
projects = [
    {
        "id": 1,
        "title": "Sistem Absensi QR Code",
        "category": "web",
        "desc": "Absensi mahasiswa pakai QR Code + Flask + MySQL + face recognition.",
        "img": "project-1.jpg",
        "tech": ["Flask", "MySQL", "OpenCV"],
        "github": "#",
        "live": "#"
    },
    {
        "id": 2,
        "title": "E-Commerce Fashion",
        "category": "web",
        "desc": "Toko online fullstack dengan payment gateway Midtrans.",
        "img": "project-2.jpg",
        "tech": ["Flask", "Tailwind", "SQLite"],
        "github": "#",
        "live": "#"
    },
    {
        "id": 3,
        "title": "Mobile App TodoList",
        "category": "mobile",
        "desc": "Aplikasi todo dengan Flutter + backend Flask API.",
        "img": "project-3.jpg",
        "tech": ["Flutter", "Flask API"],
        "github": "#",
        "live": "#"
    },
    {
        "id": 4,
        "title": "Dashboard Admin Sekolah",
        "category": "web",
        "desc": "Sistem manajemen sekolah lengkap dengan chart Chart.js.",
        "img": "project-4.jpg",
        "tech": ["Flask", "Chart.js", "Bootstrap"],
        "github": "#",
        "live": "#"
    }
]

@app.route('/')
def home():
    return render_template('index.html', projects=projects)

@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.get_json()
    # Di sini nanti bisa connect ke email (smtplib) atau Google Sheets
    print("Pesan masuk dari:", data['name'])
    return jsonify({"status": "success", "message": "Pesan terkirim! Terima kasih 😊"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)