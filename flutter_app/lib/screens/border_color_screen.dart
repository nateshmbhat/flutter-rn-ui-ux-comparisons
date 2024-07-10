import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_poc/images.dart';

class BorderColorTestScreen extends HookWidget {
  const BorderColorTestScreen({super.key});

  @override
  Widget build(BuildContext context) {
    const border = BorderSide(color: Colors.red, width: 10);
    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: Container(
          decoration: const BoxDecoration(
            border: Border(
                top: border,
                bottom: BorderSide(color: Colors.blue, width: 10),
                left: border,
                right: border),
          ),
          height: 200,
          width: 200,
          child: const Center(child: Text('My Text')),
        ),
      ),
    );
  }
}
