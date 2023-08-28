# Pitch-to-SBI-Hackathon

## README.md :

#### Team Name - Uncertainitycoders
#### Problem Statement - Real-Time High Scale Financial Fraud Risk Management
#### Team Leader Email - ksharma7_be21@thapar.edu

## A Brief of the Prototype:
We have deployed highly scalable, open source data transaction streamer of Kafka. Kafka is used by various huge corporations like Netflix for enormous traffic channelization. Our model, converts the json data into a preprocessed format that our model further predicts upon. Our ann model shows a accuracy of 99.6 % and has been tuned to reduce amount of false positives.

Anomaly detectors are not as scalable and can only predict based on the patterns learned from training data. In the modern world fraud threats evolve over time and hence there is a need for models that learn based on incoming data aswell, learning new threats and evolving overtime, hence ANN models are most accurate for this application. The training data and ANN model is as close to real world as possible with consideration of identity. Kafka is open source , highly scalable real time data straming network, which has been utilised.

## Tech Stack: 
   kafka, ml libraries

-----------------------------------------------------------------------------------------------------------------------------------------------------

![image](https://github.com/sharma-kshitij-ks/Pitch-to-SBI-Hackathon/assets/124446613/ca662326-dff4-4166-a400-13d99bd04c4d)

--------------------------------------------------------------------------------------------------------------------------------------------------------
## Step-by-Step Code Execution Instructions:
---------------------------------------------------
Execute code in ipynb by loading custom dataset in ipynb
------------------------------------------------------
Set up Kafka --

Create 2 folders in F drive--
kafka_logs-- zookeeper
kafka_logs-- server_logs

change the zookeeper.properties:
------------------------------------------------------
dataDir=F:/kafka_logs/zookeeper
maxClientCnxns=1

This property limits the number of active connections from a host, specified by IP address, to a single ZooKeeper server.

change the server.properties:
----------------------------------------------------
uncomment listeners
log.dirs=F:/kafka_logs/server_logs
zookeeper.connect=localhost:2181
zookeeper.connection.timeout.ms=60000

Start Zookeeper:
---------------------------------------
F:/kafka_2.12-3.2.0/bin/windows/zookeeper-server-start.bat F:/kafka_2.12-3.2.0/config/zookeeper.properties

Start Kafka-server:
-----------------------------------------
F:/kafka_2.12-3.2.0/bin/windows/kafka-server-start.bat F:/kafka_2.12-3.2.0/config/server.properties

Create topic:
------------------------------------
F:/kafka_2.12-3.2.0/bin/windows/kafka-topics.bat --create --topic hello_world --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1

Start Producer:
--------------------------------------
F:/kafka_2.12-3.2.0/bin/windows/kafka-console-producer.bat --topic hello_world --bootstrap-server localhost:9092

Start Consumer:
-------------------------------------
F:/kafka_2.12-3.2.0/bin/windows/kafka-console-consumer.bat --topic hello_world --from-beginning --bootstrap-server localhost:9092

kafka-python installation:
--------------------------------------------------
pip install kafka-python
(To know more about this client , you can refer this link :
https://pypi.org/project/kafka-python/)

  
## What I Learned:
   World of real time , high scale , accurate functioning and processing networks. 
