// import 'package:http/http.dart' as http;
// // import 'dart:convert';

// fetchdata(String url)async{
//   http.Response response = await http.get(Uri.parse(url));
//   return response.body;
// }

import 'dart:convert';
import 'package:http/http.dart' as http;

// Future<String> fetchPrediction(String url) async {
//   final response = await http.get(Uri.parse(url));

//   if (response.statusCode == 200) {
//     final responseData = jsonDecode(response.body);
//     return responseData['prediction'];
//   } else {
//     throw Exception('Failed to load prediction');
//   }
// }

Future<String> fetchPrediction(String url) async {
  final response = await http.get(Uri.parse(url));

  if (response.statusCode == 200) {
    final responseData = jsonDecode(response.body);
    final prediction = responseData['prediction'];
    
    // Check if prediction is "[1]" and convert it to "1" if necessary
    if (prediction == "[1]") {
      return "1";
    }
  else if(prediction == "[0]"){
    return "0";
  }
    
    return prediction;
  } else {
    throw Exception('Failed to load prediction');
  }
}



//['amount','category','merchant','gender','age','customer']
String constructURL(String customer, String age, String gender, String merchant, String category, String amount) {
  // Construct and return the URL with query parameters
  return 'http://10.0.2.2:5000/predict?input1=$customer&input2=$age&input3=$gender&input4=$merchant&input5=$category&input6=$amount'; // Add other inputs here
}
