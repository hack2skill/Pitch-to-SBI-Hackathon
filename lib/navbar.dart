import 'package:flutter/material.dart';
import 'container.dart';

class navbar extends StatefulWidget {
  @override
  State<navbar> createState() => _navbarState();
}

class _navbarState extends State<navbar> {
  int _selectedIndex = 0;

  Widget build(BuildContext context) {
    return Scaffold(
      extendBody: true,
      bottomNavigationBar: Container(
        margin: EdgeInsets.symmetric(horizontal: 60, vertical: 5),
        decoration: BoxDecoration(
          // color: Colors.blue,
          borderRadius: BorderRadius.all(
            Radius.circular(30),
          ),
          boxShadow: [
            BoxShadow(color: Colors.black38, spreadRadius: 0, blurRadius: 10),
          ],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.all(Radius.circular(30)
              // topLeft: Radius.circular(30.0),
              // topRight: Radius.circular(30.0),
              ),
          child: BottomNavigationBar(
            type: BottomNavigationBarType.fixed,
            onTap: (index) {
              setState(() {
                _selectedIndex = index;
              });
            },
            currentIndex: _selectedIndex,
            showUnselectedLabels: false,

            // showSelectedLabels: true,
            iconSize: 25,
            selectedFontSize: 15,
            // fixedColor: Colors.white,
            // selectedIconTheme: IconThemeData(color: Colors.amberAccent,size: 40),
            // selectedItemColor: Colors.amberAccent,
            selectedIconTheme: IconThemeData(
                color: Color.fromARGB(255, 12, 150, 230), size: 30),
            selectedItemColor: Color.fromARGB(255, 12, 150, 230),
            selectedLabelStyle: TextStyle(fontWeight: FontWeight.bold),
            backgroundColor: Colors.black,
            unselectedItemColor: Colors.white,
            unselectedFontSize: 10,
            items: const <BottomNavigationBarItem>[
              BottomNavigationBarItem(
                icon: Icon(Icons.home),
                label: 'Home',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.file_copy),
                label: 'Documents',
              ),
              BottomNavigationBarItem(
                  icon: Icon(
                    Icons.question_mark_rounded,
                  ),
                  label: 'FAQ'),
            ],

            // onTap: _onItemTapped,
          ),
        ),
      ),
      body: (pageindex[_selectedIndex]),
    );
  }
}
