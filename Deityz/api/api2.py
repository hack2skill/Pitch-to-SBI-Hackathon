# api.py

import pickle

import numpy as np
from flask import Flask, jsonify, request
from sklearn.calibration import LabelEncoder

app = Flask(__name__)
model = pickle.load(open('log-reg-model2.pkl', 'rb'))
customer= pickle.load(open('customer_encoder.pkl', 'rb'))
gender = pickle.load(open('gender_encoder.pkl', 'rb'))
merchant = pickle.load(open('merchant_encoder.pkl', 'rb'))
category = pickle.load(open('category_encoder.pkl', 'rb'))
age = pickle.load(open('age_encoder.pkl', 'rb'))
@app.route('/predict', methods=['GET'])
def predict():
    try:
        input1 = request.args['input1']
        input2 = request.args['input2']
        input3 = request.args['input3']
        input4 = request.args['input4']
        input5 = request.args['input5']
        input6 = float(request.args['input6'])
    
        input1=210 #customer
        input2=4 #age
        input3=2 # gender
        input4=30 # merchant
        input5=12 #category
        # Replace with your prediction logic here
        # change the list of inputs to np array
        # ['amount','category','merchant','gender','age','customer'] this is the order
        arr = np.array([input6, input5, input4, input3,input2,input1]).reshape(1, -1)
        prediction = str(model.predict(arr))

        response_data = {'prediction': prediction}
        return (response_data), 200
    except Exception as e:
        return {'error': str(e)}, 400
    

# from flask import Flask, request, jsonify
# import pickle
# from sklearn.calibration import LabelEncoder

# app = Flask(__name__)
# model = pickle.load(open('log-reg-model2.pkl', 'rb'))

# @app.route('/predict', methods=['GET'])
# def predict():
#     try:
#         input1 = request.args.get('input1')
#         input2 = request.args.get('input2')
#         input3 = request.args.get('input3')
#         input4 = request.args.get('input4')
#         input5 = request.args.get('input5')
#         input6 = float(request.args.get('input6'))
        
#         # You don't need to use LabelEncoder if your model doesn't require it.
#         # If you do need to encode categorical data, use it appropriately.
     
#         # Replace with your prediction logic here
#         prediction = model.predict([[input1, input2, input3, input4, input5, input6]])

#         response_data = {'prediction': str(prediction)}
#         return jsonify(response_data), 200
#     except Exception as e:
#         return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
