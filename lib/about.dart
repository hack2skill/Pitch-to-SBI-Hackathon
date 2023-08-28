// import 'package:flutter/material.dart';

// class AboutSection extends StatefulWidget {
//   const AboutSection({super.key});

//   @override
//   State<AboutSection> createState() => _AboutSectionState();
// }

// class _AboutSectionState extends State<AboutSection> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//           scrolledUnderElevation: 0.0,
//           // backgroundColor: Colors.transparent,
//           title: Container(
//             margin: EdgeInsets.fromLTRB(0, 25, 0, 20),
//             // mainAxisAlignment: MainAxisAlignment.center,
//             child: Row(
//               children: [
//                 Icon(
//                   Icons.list,
//                   size: 50,
//                 ),
//                 Container(
//                   margin: EdgeInsets.fromLTRB(47, 5, 0, 0),
//                   child: Image.asset(
//                     'assets/images/abc.png',
//                     width: 200,
//                     height: 150,
//                   ),
//                 ),
//               ],
//             ),
//           )),
//       body: SingleChildScrollView(
//         child: ListView.builder(
//             physics: NeverScrollableScrollPhysics(),
//             shrinkWrap: true,
//             itemCount: 5,
//             itemBuilder: (context, index) {
//               return InkWell(
//                 onTap: () {},
//                 child: const Card(
//                   child: Text("Hello"),
//                 ),
//               );
//             }),
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';

void main() {
  runApp(FaqApp());
}

class FaqApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'FAQ App',
      // theme: ThemeData(primarySwatch:),

      home: FaqPage(),
    );
  }
}

class FaqPage extends StatelessWidget {
  final List<Map<String, String>> faqData = [
    {
      'question': 'What can I use a personal loan for?',
      'answer':
          'A personal loan can be used for almost any type of expense ranging from big ticket appliance purchases and home renovations to luxury vacations and debt consolidation. Some other cases where personal loans may be useful include payment to unexpected medical bills, investment in business, fixing your car, down payment of new house and much more.',
    },
    {
      'question': 'What is eligibility for Kisan Credit Card Scheme?',
      'answer':
          'In order to be eligible for KCC, you should be either: \n\n - All farmers-individuals/Joint borrowers who are owner cultivators. \n - Tenant farmers, Oral lessees and Share croppers, etc,. \n - SHGs or Joint Liability Groups of farmers including tenant farmers, share croppers, etc,.',
    },
    {
      'question': 'Who are eligible for Kisan Samriddhi Rin?',
      'answer':
          '- Farmers engaged in progressive or Scientific farming.\n- Minimum land holding: At least having 4 acres of land holding Or farmer is engaged in scientific methods of farming. ',
    },
    // Add more FAQ entries as needed
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.white,
          // scrolledUnderElevation: 0.0,
          // backgroundColor: Colors.transparent,
          title: Container(
            margin: EdgeInsets.fromLTRB(0, 25, 0, 20),
            // mainAxisAlignment: MainAxisAlignment.center,
            child: Row(
              children: [
                Icon(
                  Icons.list,
                  size: 50,
                  color: Colors.black,
                ),
                Container(
                  margin: EdgeInsets.fromLTRB(47, 5, 0, 0),
                  child: Image.asset(
                    'assets/images/abc.png',
                    width: 200,
                    height: 150,
                  ),
                ),
              ],
            ),
          )),
      body: Container(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              alignment: Alignment.topCenter,
              padding: EdgeInsets.symmetric(horizontal: 0, vertical: 10),
              child: Text(
                "FAQ",
                style: TextStyle(fontSize: 40, fontWeight: FontWeight.bold),
              ),
            ),
            Expanded(
              child: SingleChildScrollView(
                child: ListView.builder(
                  physics: NeverScrollableScrollPhysics(),
                  shrinkWrap: true,
                  itemCount: faqData.length,
                  itemBuilder: (context, index) {
                    return ExpansionTile(
                      title: Text(faqData[index]['question']!),
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(16.0),
                          child: Text(faqData[index]['answer']!),
                        ),
                      ],
                    );
                  },
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
