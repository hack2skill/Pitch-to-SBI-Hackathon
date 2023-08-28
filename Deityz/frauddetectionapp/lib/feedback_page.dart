import 'package:flutter/material.dart';

class FeedbackPage extends StatefulWidget {
  @override
  _FeedbackPageState createState() => _FeedbackPageState();
}

class _FeedbackPageState extends State<FeedbackPage> {
  TextEditingController feedbackController = TextEditingController();

  void saveFeedback() {
    // Implement the code to save feedback to Firebase here.
    // You can use Firebase or any other backend service to save feedback.
    // This part is beyond the scope of this example.
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Report Transaction'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Text(
              'Please provide feedback for this transaction:',
              style: TextStyle(fontSize: 18.0),
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: feedbackController,
              maxLines: 5,
              decoration: InputDecoration(
                labelText: 'Feedback',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 16.0),
            ElevatedButton(
              onPressed: saveFeedback,
              style: ElevatedButton.styleFrom(
                primary: Colors.orange, // Button color
              ),
              child: Text('Submit Feedback'),
            ),
          ],
        ),
      ),
    );
  }
}
