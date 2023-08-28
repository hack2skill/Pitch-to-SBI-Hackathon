import 'package:dhan1/form.dart';
import 'package:flutter/material.dart';

class document extends StatefulWidget {
  const document({super.key});

  @override
  State<document> createState() => _documentState();
}

class _documentState extends State<document> {
  List<String> text = ["E-KYC", "Aadhaar"];
  List<IconData> symbols = [
    Icons.fingerprint,
    Icons.credit_card,
  ];
  List<String> images = [
    "assets/images/digital.png",
    "assets/images/1.jpg",
    // "assets/images/yojana.jpg",
  ];

  List<IconData> symbols1 = [
    Icons.verified,
    Icons.verified,
  ];
  List integer = ["10%", "3 years", "1 lakh", " "];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.white,
          scrolledUnderElevation: 0.0,
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
      body: SingleChildScrollView(
        // margin: EdgeInsets.symmetric(horizontal: 0,vertical: 10),
        child: Column(
          children: [
            Container(
                alignment: Alignment.topCenter,
                padding: EdgeInsets.fromLTRB(0, 40, 0, 0),
                child: Text(
                  "Documents:",
                  style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.bold,
                  ),
                )),
            GridView.builder(
              shrinkWrap: true,
              padding: const EdgeInsets.fromLTRB(20, 0, 20, 5),
              itemCount: 2,
              itemBuilder: (ctx, index) {
                return Card(
                  elevation: 5,
                  child: Container(
                    // height: 500,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      color: Colors.grey[50],
                    ),
                    // margin: EdgeInsets.all(5),
                    // padding: EdgeInsets.all(5),

                    child: Stack(
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Expanded(
                                child: Container(
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  FittedBox(
                                    // padding: EdgeInsets.fromLTRB(0, 30, 0, 0),
                                    fit: BoxFit.scaleDown,
                                    child: Icon(
                                      symbols[index],
                                      color: Colors.black,
                                      size: 90,
                                    ),
                                  ),
                                ],
                              ),
                            )),
                            Container(
                              decoration: BoxDecoration(
                                  borderRadius: BorderRadius.only(
                                      bottomLeft: Radius.circular(10),
                                      bottomRight: Radius.circular(10)),
                                  color: Colors.grey[200]),
                              padding: EdgeInsets.fromLTRB(10, 10, 0, 5),
                              child: Row(
                                  // mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Text(
                                      text[index],
                                      style: TextStyle(
                                        fontSize: 15,
                                        fontWeight: FontWeight.bold,
                                        color: Colors.black,
                                      ),
                                    ),
                                    Container(
                                      margin: EdgeInsets.fromLTRB(60, 0, 0, 0),
                                      child: Icon(
                                        symbols1[index],
                                        color: Colors.black,
                                        size: 30,
                                      ),
                                    ),
                                  ]),
                            ),

                            // Row(
                            //   children: [
                            //     Text(
                            //       'Subtitle',
                            //       style: TextStyle(
                            //         fontWeight: FontWeight.bold,
                            //         fontSize: 15,
                            //       ),
                            //     ),
                            //   ],
                            // )
                          ],
                        ),
                      ],
                    ),
                  ),
                );
              },
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                childAspectRatio: 1.0,
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
                mainAxisExtent: 150,
              ),
            ),
            ListView.builder(
                physics: NeverScrollableScrollPhysics(),
                shrinkWrap: true,
                itemCount: 2,
                itemBuilder: (context, index) {
                  return GestureDetector(
                    onTap: () {
                      // Navigator.push(
                      //     context,
                      //     MaterialPageRoute(
                      //       builder: (context) => page[index],
                      //     ));
                    },
                    child: Card(
                      margin: EdgeInsets.fromLTRB(40, 10, 40, 20),
                      color: Colors.grey[300],
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                      elevation: 3,
                      child: ClipRect(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            ClipRRect(
                              borderRadius: BorderRadius.circular(10),
                              child: Image.asset(
                                images[index],
                                // height: , // Replace with your image URL
                                // height: 150,
                                // width: double.infinity,
                                // fit: BoxFit.cover,
                              ),
                            ),
                            // SizedBox(height: 10),
                            // Container(
                            //   padding: EdgeInsets.all(7),
                            //   child: Row(
                            //     mainAxisAlignment: MainAxisAlignment.start,
                            //     children: [
                            //       // Text(
                            //       //   labels[index],
                            //       //   style:
                            //       //       const TextStyle(fontSize: 16),
                            //       // ),
                            //       Spacer(),
                            //       // Container(
                            //       //   margin:
                            //       //       EdgeInsets.fromLTRB(0, 0, 140, 0),
                            //       //   child: ElevatedButton(
                            //       //       style: ElevatedButton.styleFrom(
                            //       //           foregroundColor: Colors.white,
                            //       //           backgroundColor:
                            //       //               Colors.green),
                            //       //       onPressed: () {
                            //       //         Navigator.push(
                            //       //             context,
                            //       //             MaterialPageRoute(
                            //       //                 builder: (context) =>
                            //       //                     page[index]));
                            //       //       },
                            //       //       child: Text("Apply Now")),
                            //       // ),
                            //       // Icon(
                            //       //   Icons.verified,
                            //       //   size: 35,
                            //       //   color: Colors.blue,
                            //       // ),
                            //     ],
                            //   ),
                            // ),
                          ],
                        ),
                      ),
                    ),
                  );
                })
          ],
        ),
      ),
    );
  }
}
