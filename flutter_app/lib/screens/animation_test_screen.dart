import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_poc/images.dart';

class AnimationTestScreen extends HookWidget {
  const AnimationTestScreen({super.key});

  @override
  Widget build(BuildContext context) {
    useEffect(() {
      Animate.restartOnHotReload = true;
    }, []);

    final animVal = useState(0.0);

    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Expanded(
              child: Center(
                child: Container(
                  child: Text('Lorem Ipsum text hello its me')
                      .animate(target: animVal.value)
                      .fadeIn(duration: 2.seconds)
                      .then()
                      .rotate(end: 1, curve: Curves.slowMiddle)
                      .scale(end: Offset(2, 2))
                      .then(delay: 1.seconds)
                      .moveY(end: -100)
                      .then()
                      .scale(end: Offset(0.7, 0.7))
                      .shakeX()
                      .then()
                      .blur(duration: 2.seconds)
                      .then()
                      .fadeOut(duration: 1.seconds)
                      .swap(
                    builder: (context, child) {
                      return Text('Welcome')
                          .animate()
                          .fadeIn(duration: 1.seconds)
                          .scale(end: Offset(1.3, 1.3));
                    },
                  ),
                ),
              ),
            ),
            Slider(
                max: 1,
                min: 0,
                value: animVal.value,
                onChanged: (newVal) => animVal.value = newVal),
          ],
        ),
      ),
    );
  }
}

class MyCustomEffect extends FadeEffect {}
