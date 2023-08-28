from kafka import KafkaProducer
import json
import csv
import time
producer = KafkaProducer(bootstrap_servers='localhost:9092')
csv_file = r'C:\Users\Sharm\Desktop\sbi\X_test.csv'
with open(csv_file, 'r') as file:
    csv_reader = csv.reader(file)
    next(csv_reader) 
    for i, row in enumerate(csv_reader, start=1):
        json_data = json.dumps(row)
        # Send the JSON string as a Kafka message
        producer.send('hello_world', value=json_data.encode('utf-8'))
        print(f"Message {i} sent: {json_data}")
        print("Transaction has been sent.")
        # Adding delay for readability
        time.sleep(0.1)
producer.close()

