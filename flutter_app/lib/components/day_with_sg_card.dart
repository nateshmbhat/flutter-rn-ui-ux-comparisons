import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_animate/flutter_animate.dart';

const sunImage = 'lib/assets/img_sun.png';

class SunImageAnimation extends StatelessWidget {
  const SunImageAnimation({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Image.asset(sunImage, width: 300, height: 300)
          .animate()
          .fadeIn(duration: 2.seconds)
          .scaleXY(end: 0.64)
          .then(duration: 0.ms)
          .swap(
              builder: (_, child) => child!
                  .animate(onPlay: (controller) => controller.repeat())
                  .scaleXY(begin: 0.64, end: 0.64)
                  .rotate(duration: 30.seconds)),
    );
  }
}
