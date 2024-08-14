import 'dart:math';

import 'package:flutter/material.dart';
import 'package:confetti/confetti.dart';

class ConfettiDemoScreen extends StatefulWidget {
  @override
  _ConfettiDemoScreenState createState() => _ConfettiDemoScreenState();
}

class _ConfettiDemoScreenState extends State<ConfettiDemoScreen> {
  final ConfettiController _controller =
      ConfettiController(duration: const Duration(seconds: 1));

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Align(
            alignment: Alignment.topCenter,
            child: ConfettiWidget(
              confettiController: _controller,
              blastDirection: -pi / 2,
              maxBlastForce: 10,
              minBlastForce: 2,
              emissionFrequency: 0.000001,
              numberOfParticles: 800,
              maximumSize: const Size(10, 10),
              minimumSize: const Size(2, 2),
              gravity: 0.05,
              blastDirectionality: BlastDirectionality.explosive,
            ),
          ),
          Center(
            child: ElevatedButton(
              child: Text('Celebrate!'),
              onPressed: () {
                _controller.play();
              },
            ),
          ),
        ],
      ),
    );
  }
}
