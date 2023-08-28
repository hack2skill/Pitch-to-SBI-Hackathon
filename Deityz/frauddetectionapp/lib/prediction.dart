import 'package:flutter/material.dart';

import 'feedback_page.dart';
import 'friend.dart';

class PredictionPage extends StatelessWidget {
  final String prediction;

  PredictionPage({required this.prediction});

  @override
  Widget build(BuildContext context) {
    // Determine text color based on prediction
    Color textColor = prediction == '0' ? Colors.green : Colors.red;

    return Scaffold(
      appBar: AppBar(
        title: Text('Prediction Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Prediction Result:',
              style: TextStyle(fontSize: 24.0),
            ),
            Text(
              prediction == '0' ? 'Not Fraud' : 'Fraud',
              style: TextStyle(
                fontSize: 36.0,
                color: textColor, // Set the text color based on prediction
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: Padding(
        padding: EdgeInsets.only(left: 16.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Padding(
              padding: const EdgeInsets.only(left: 8.0),
              child: FloatingActionButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => FeedbackPage()),
                  );
                },
                backgroundColor: Color.fromARGB(255, 30, 108, 252),
                child: Icon(Icons.feedback),
              ),
            ),
            FloatingActionButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => FriendsPage()),
                );
              },
              backgroundColor: Color.fromARGB(255, 30, 108, 252),
              child: Icon(Icons.person_add),
            ),
          ],
        ),
      ),
    );
  }
}
