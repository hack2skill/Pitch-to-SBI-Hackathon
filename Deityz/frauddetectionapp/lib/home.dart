import 'package:app/function.dart';
import 'package:flutter/material.dart';

import 'history.dart'; // Import the history page
import 'prediction.dart'; // Import the prediction page

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  TextEditingController customerController = TextEditingController();
  TextEditingController ageController = TextEditingController();
  TextEditingController genderController = TextEditingController();
  TextEditingController merchantController = TextEditingController();
  TextEditingController categoryController = TextEditingController();
  TextEditingController amountController = TextEditingController();

  void makePrediction() {
    // Construct the URL with inputs
    String url = constructURL(
      customerController.text,
      ageController.text,
      genderController.text,
      merchantController.text,
      categoryController.text,
      amountController.text,
    );

    // Call a function to fetch the prediction from the API and navigate to the PredictionPage.
    // This part is assumed to be implemented elsewhere.
    // String result = await fetchPrediction(url);

    // For this example, we'll navigate to the PredictionPage with a placeholder result.
    String result = '0';
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => PredictionPage(prediction: result),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('SLASH'),
        centerTitle: true,
        backgroundColor: Color.fromARGB(255, 30, 108, 252),
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            // DrawerHeader(
            //   decoration: BoxDecoration(
            //     color: Color.fromARGB(255, 30, 108, 252),
            //   ),
            //   child: Text(
            //     'Menu',
            //     style: TextStyle(
            //       color: Colors.white,
            //       fontSize: 24,
            //     ),
            //   ),
            // ),
            DrawerHeader(
                decoration: BoxDecoration(
                  color: Color.fromARGB(255, 30, 108, 252),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.5),
                      spreadRadius: 5,
                      blurRadius: 7,
                      offset: Offset(0, 3),
                    ),
                  ],
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      Color.fromARGB(255, 30, 108, 252),
                      Colors.blue, // You can change this to another color if desired
                    ],
                  ),
                ),
                child: Text(
                  'Menu',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24,
                  ),
                ),
              ),

            ListTile(
              title: Text('Home'),
              onTap: () {
                // Navigate to the HistoryPage when "History" is tapped
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => HistoryPage()),
                );
              },
            ),
            ListTile(
              title: Text('History'),
              onTap: () {
                // Navigate to the HistoryPage when "History" is tapped
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => HistoryPage()),
                );
              },
            ),
            ListTile(
              title: Text('Bin'),
              onTap: () {
                // Navigate to the HistoryPage when "History" is tapped
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => HistoryPage()),
                );
              },
            ),
            ListTile(
              title: Text('Settings'),
              onTap: () {
                // Navigate to the HistoryPage when "History" is tapped
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => HistoryPage()),
                );
              },
            ),
            // Add other drawer items here as needed
          ],
        ),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            buildInputField("Customer", customerController),
            buildInputField("Age", ageController),
            buildInputField("Gender", genderController),
            buildInputField("Merchant", merchantController),
            buildInputField("Category", categoryController),
            buildInputField("Amount", amountController),
            SizedBox(height: 20.0),
            ElevatedButton(
              onPressed: makePrediction,
              style: ElevatedButton.styleFrom(
                primary: Color.fromARGB(255, 30, 108, 252),
                textStyle: TextStyle(fontSize: 20),
              ),
              child: Text('Predict'),
            ),
            SizedBox(height: 20.0),
            // ... (same as before)
          ],
        ),
      ),
    );
  }

  Widget buildInputField(String label, TextEditingController controller) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 8.0),
      child: TextField(
        controller: controller,
        decoration: InputDecoration(
          labelText: label,
          border: OutlineInputBorder(),
        ),
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: HomePage(),
    theme: ThemeData(
      primaryColor: Color.fromARGB(255, 30, 108, 252),
      scaffoldBackgroundColor: Color.fromARGB(255, 30, 108, 252),
    ),
  ));
}
