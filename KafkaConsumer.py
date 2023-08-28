import sklearn
import json
import pandas as pd
from kafka import KafkaConsumer
import tensorflow as tf
import sklearn.preprocessing

# Load the pre-trained model
model = tf.keras.models.load_model(r'C:\Users\Sharm\Desktop\sbi\fraud_detection_model.h5')  

consumer = KafkaConsumer(
    'hello_world',
    bootstrap_servers='localhost:9092',  # Remove 'tcp://'
    value_deserializer=lambda x: json.loads(x.decode('utf-8')),
    auto_offset_reset='latest',
    enable_auto_commit=True,
    auto_commit_interval_ms=500
)

label_encoders = {}

for i, message in enumerate(consumer, start=1):
    data = message.value  

    columns = ['merchant', 'category', 'amt', 'city', 'state', 'lat', 'long', 'city_pop', 'job',
               'merch_lat', 'merch_long', 'hour_of_day', 'day_of_week', 'age']
    df = pd.DataFrame([data], columns=columns)
    numerical_columns = ['amt', 'lat', 'long', 'city_pop', 'merch_lat', 'merch_long', 'age']
    categorical_columns = ['merchant', 'category', 'city', 'state', 'job']
    for col in categorical_columns:
        le = sklearn.preprocessing.LabelEncoder()
        df[col] = le.fit_transform(df[col])
        label_encoders[col] = le

    scaler = sklearn.preprocessing.StandardScaler()
    df[numerical_columns] = scaler.fit_transform(df[numerical_columns])
    prediction = model.predict(df)  

    # Convert prediction to 'Yes' (1) or 'No' (0)
    fraud_label = 'Yes' if prediction[0][0] == 1 else 'No'
    df['Fraud'] = fraud_label

    print("Received Message {}: {}".format(i, data))
    print("Prediction: {}".format(fraud_label))

consumer.close()

