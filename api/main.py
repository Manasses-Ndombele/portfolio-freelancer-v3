import smtplib
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv

app = Flask(__name__)
load_dotenv()
app.secret_key = os.getenv('APP_SECRET_KEY')
CORS(app)

@app.route('/api/send-email', methods=['POST'])
def send_email():
    if not request.is_json:
        return jsonify({"error": "Os dados enviados devem estar no formato JSON"}), 405

    datas = request.get_json()
    try:
        client_name = datas["clientName"]
        client_contact_way = datas["clientContactWay"]
        project_name = datas["projectName"]
        project_example = datas["projectExample"]
        project_description = datas["projectDescription"]
        smtp_server  = 'smtp.gmail.com'
        smtp_port = 587
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        sender_email = os.getenv("SENDER_EMAIL")
        sender_password = os.getenv("SENDER_EMAIL_PASSWORD")
        server.login(sender_email, sender_password)
        msg = MIMEMultipart()
        msg['From'] = sender_email
        recipient_email = os.getenv("RECIPIENT_EMAIL")
        msg['To'] = recipient_email
        msg['Subject'] = "Novo pedido de orçamento"
        with open("./email-base.html", "r", encoding="utf8") as html_file:
            base_message = html_file.read()

        final_message = base_message.replace("PROJECT_NAME", project_name).replace("CLIENT_NAME", client_name).replace("CONTACT_WAY", client_contact_way).replace("DESCRIPTION", project_description).replace("EXAMPLE", project_example)
        msg.attach(MIMEText(final_message, 'html'))
        try:
            server.sendmail(sender_email, recipient_email, msg.as_string())

        except Exception as e:
            return jsonify({"error": f"${e}"}), 400

        server.quit()
        return jsonify({"success": True, "message": "O email foi enviado com sucesso!"}), 200

    except KeyError as e:
        return jsonify({"error": f"Chave ausente: {str(e)}"}), 404

@app.route('/')
def home():
    return "API de envio de emails rodando com sucesso!"

if __name__ == '__main__':
    if os.getenv("DEBUG"):
        app.run(debug=True)
    else:
        app.run(debug=False, host='0.0.0.0', port=8080)
