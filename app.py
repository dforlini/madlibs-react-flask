from flask import Flask, request, jsonify
from flask_cors import CORS
import stories

app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    noun = data.get('noun')
    verb = data.get('verb')
    adjective = data.get('adjective')
    story = stories.create_story(noun, verb, adjective)
    return jsonify({'story': story})

if __name__ == '__main__':
    app.run(debug=True)