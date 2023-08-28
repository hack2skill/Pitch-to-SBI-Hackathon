import 'package:flutter/material.dart';

class Friend {
  final String name;
  final String email;
  bool isFavorite = false;

  Friend(this.name, this.email);
}

class FriendsPage extends StatefulWidget {
  @override
  _FriendsPageState createState() => _FriendsPageState();
}

class _FriendsPageState extends State<FriendsPage> {
  final TextEditingController nameController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  List<Friend> friends = [];

  void addFriend() {
    setState(() {
      final name = nameController.text;
      final email = emailController.text;
      if (name.isNotEmpty && email.isNotEmpty) {
        friends.add(Friend(name, email));
        nameController.clear();
        emailController.clear();
      }
    });
  }

  void toggleFavorite(int index) {
    setState(() {
      friends[index].isFavorite = !friends[index].isFavorite;
    });
  }

  void deleteFriend(int index) {
    setState(() {
      friends.removeAt(index);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Friends Page'),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              children: [
                TextField(
                  controller: nameController,
                  decoration: InputDecoration(labelText: 'Name'),
                ),
                TextField(
                  controller: emailController,
                  decoration: InputDecoration(labelText: 'Email'),
                ),
                ElevatedButton(
                  onPressed: addFriend,
                  child: Text('Add Friend'),
                ),
              ],
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: friends.length,
              itemBuilder: (context, index) {
                final friend = friends[index];
                return Container(
                  decoration: BoxDecoration(
                    border: Border(bottom: BorderSide(color: Colors.grey)),
                  ),
                  child: ListTile(
                    title: Text(friend.name),
                    subtitle: Text(friend.email),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        InkWell(
                          onTap: () {
                            toggleFavorite(index);
                          },
                          child: Icon(
                            friend.isFavorite
                                ? Icons.favorite
                                : Icons.favorite_border,
                            color: friend.isFavorite ? Colors.red : null,
                          ),
                        ),
                        SizedBox(width: 16.0),
                        InkWell(
                          onTap: () {
                            deleteFriend(index);
                          },
                          child: Icon(Icons.delete),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
