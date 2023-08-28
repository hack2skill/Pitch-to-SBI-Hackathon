# make an api which uses ml model pkl file which i have to predict the result and show it to flutter app
# import the necessary packages
from flask import Flask, request, jsonify
import pickle
import numpy as np
import pandas as pd


# initialize our Flask application
app = Flask(__name__)
# load the model from disk
model = pickle.load(open('/home/ambuj/projects/Fraud-Detection-on-Bank-Payment', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from the Flutter app as JSON
        data = request.get_json()

        # Extract the input features from the JSON data
        input_data = data['input_data']

        # Use your loaded model to make predictions
        prediction = model.predict([input_data])

        # Format the prediction as needed
        response = {
            'prediction': prediction.tolist()
        }

        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
