import 'package:flutter/material.dart';

class FedraFontTestScreen extends StatelessWidget {
  const FedraFontTestScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // https://jira.isha.in/browse/SGAPP-5182
    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                width: 300,
                height: 300,
                decoration: BoxDecoration(
                  border: Border.all(),
                ),
                child: Text(
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, totam libero. Architecto mollitia sint molestiae saepe, ut omnis corporis! Quisquam dolore unde incidunt aspernatur deleniti natus neque expedita eligendi a.',
                  style: TextStyle(
                    fontFamily: 'FedraSerif',
                    fontWeight: FontWeight.w300,
                    fontSize: 20,
                    height: 1.4,
                    color: Colors.black,
                  ),
                ),
              ),
              SizedBox(height: 20),
              Container(
                width: 300,
                height: 300,
                decoration: BoxDecoration(
                  border: Border.all(),
                ),
                child: Text(
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
                  'Reprehenderit, totam libero. Architecto mollitia sint molestiae saepe, '
                  'ut omnis corporis! Quisquam dolore unde incidunt aspernatur deleniti '
                  'natus neque expedita eligendi a.',
                  style: TextStyle(
                    fontFamily: 'FedraSerif',
                    fontSize: 20,
                    height: 1.4,
                    fontWeight: FontWeight.w500,
                    color: Colors.black,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
