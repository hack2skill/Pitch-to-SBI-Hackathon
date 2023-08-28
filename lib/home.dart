import 'package:dhan1/loan1.dart';
import 'package:dhan1/loan2.dart';
import 'package:dhan1/loan3.dart';
import 'package:dhan1/navbar.dart';
import 'package:flutter/material.dart';

class home extends StatefulWidget {
  const home({super.key});

  @override
  State<home> createState() => _homeState();
}

class _homeState extends State<home> {
  List<String> images = [
    "assets/images/yojana.jpg",
    "assets/images/irrigation.png",
    "assets/images/kisan.png",
  ];
  List<String> labels = [
    "Composite Minor Irrigation",
    "Kisan Credit Card Scheme",
    "Kisan Tractor Scheme",
  ];
  List icons = [Icons.verified, Icons.verified, Icons.cancel];
  List page = [loan1(), loan2(), loan3()];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      extendBody: true,
      appBar: AppBar(
          scrolledUnderElevation: 0.0,
          backgroundColor: Colors.white,
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
              margin: EdgeInsets.fromLTRB(40, 5, 5, 5),
              child: Text(
                "Available Schemes",
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
            ),
            Expanded(
              child: SingleChildScrollView(
                  child: ListView.builder(
                      physics: NeverScrollableScrollPhysics(),
                      shrinkWrap: true,
                      itemCount: 3,
                      itemBuilder: (context, index) {
                        return GestureDetector(
                          onTap: () {
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => page[index],
                                ));
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
                                    child: Image.asset(images[
                                            index] // Replace with your image URL
                                        // height: 150,
                                        // width: double.infinity,
                                        // fit: BoxFit.cover,
                                        ),
                                  ),
                                  // SizedBox(height: 10),
                                  Container(
                                    padding: EdgeInsets.all(7),
                                    child: Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.start,
                                      children: [
                                        Text(
                                          labels[index],
                                          style: const TextStyle(fontSize: 16),
                                        ),
                                        Spacer(),
                                        // Container(
                                        //   margin:
                                        //       EdgeInsets.fromLTRB(0, 0, 140, 0),
                                        //   child: ElevatedButton(
                                        //       style: ElevatedButton.styleFrom(
                                        //           foregroundColor: Colors.white,
                                        //           backgroundColor:
                                        //               Colors.green),
                                        //       onPressed: () {
                                        //         Navigator.push(
                                        //             context,
                                        //             MaterialPageRoute(
                                        //                 builder: (context) =>
                                        //                     page[index]));
                                        //       },
                                        //       child: Text("Apply Now")),
                                        // ),
                                        Icon(
                                          icons[index],
                                          size: 35,
                                          color: icons[index] == Icons.cancel
                                              ? Colors.red
                                              : Colors.blue,
                                        ),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        );
                      })),
            ),
          ],
        ),
      ),
    );
  }
}
