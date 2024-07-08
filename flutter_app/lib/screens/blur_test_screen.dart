import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_poc/images.dart';

class BlurTestScreen extends HookWidget {
  const BlurTestScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final customBlurValue = useState<double>(0.0);

    void setCustomBlurValue(double value) {
      customBlurValue.value = value;
    }

    return Scaffold(
      appBar: AppBar(),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Expanded(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  'Ratatoulie',
                  style: TextStyle(
                    fontSize: 24,
                    color: Colors.black,
                  ),
                ),
                Stack(
                  children: [
                    Container(
                      padding:
                          EdgeInsets.symmetric(horizontal: 20, vertical: 30),
                      child: Column(
                        children: [
                          Image.network(
                            images[2], // Replace with your image asset
                            height: 300,
                            width: 300,
                            fit: BoxFit.cover,
                          ),
                          SizedBox(
                            height: 20,
                          ),
                          const Text(
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            style: TextStyle(
                              fontSize: 18,
                              color: Colors.black,
                            ),
                          ),
                        ],
                      ),
                    ),
                    Positioned.fill(
                      child: ClipRRect(
                        child: BackdropFilter(
                          filter: ImageFilter.blur(
                            sigmaX: customBlurValue.value,
                            sigmaY: customBlurValue.value,
                          ),
                          child: Container(
                            color: Colors.black.withOpacity(0),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),
          Text(
            'Current Blur Value: ${customBlurValue.value.toStringAsFixed(2)}',
            style: const TextStyle(fontSize: 18),
          ),
          const SizedBox(height: 5),
          Slider(
            value: customBlurValue.value,
            min: 0.0,
            max: 10.0,
            divisions: 20,
            onChanged: setCustomBlurValue,
            label: customBlurValue.value.toStringAsFixed(2),
          ),
          const SizedBox(height: 10),
        ],
      ),
    );
  }
}
