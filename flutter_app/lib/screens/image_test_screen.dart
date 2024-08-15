import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_poc/images.dart';

class ImageTestScreen extends HookWidget {
  const ImageTestScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: Container(
          decoration: BoxDecoration(
            border: Border.all(color: Colors.black, width: 5),
            color: Colors.blue[700],
          ),
          height: 500,
          width: 300,
          child: Image.network(
            images[5],
            height: 300,
            width: 300,
          ),
        ),
      ),
    );
  }
}
