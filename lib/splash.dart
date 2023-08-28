// import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:dhan1/navbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

// import 'package:flutter_spinkit/flutter_spinkit.dart';
class loading extends StatefulWidget {
  const loading({super.key});

  @override
  State<loading> createState() => _loadingState();
}

class _loadingState extends State<loading> {
  void Loading() {
    Future.delayed(Duration(seconds: 3), () {
      Navigator.pushReplacement(
          context, MaterialPageRoute(builder: (context) => navbar()));
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    Loading();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          color: Colors.white,
        ),
        margin: EdgeInsets.fromLTRB(0, 0, 0, 0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // AnimatedTextKit(
            //   animatedTexts: [
            //     TypewriterAnimatedText(
            //       "WELCOME",
            //       textStyle: const TextStyle(
            //         fontSize: 32.0,
            //         color: Colors.white,
            //         fontWeight: FontWeight.bold,
            //       ),
            //       speed: const Duration(milliseconds: 150),
            //     ),
            //   ],
            //   totalRepeatCount: 4,
            //   pause: const Duration(milliseconds: 50),
            //   displayFullTextOnTap: true,
            //   stopPauseOnTap: true,
            // ),
            Image.asset('assets/images/abc.png'),
            SpinKitCircle(
              color: Colors.black,
              size: 50,
            )
          ],
        ),
      ),
    );
  }
}
