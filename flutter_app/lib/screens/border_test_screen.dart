import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class BorderTestScreen extends HookWidget {
  const BorderTestScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final animationController = useAnimationController(
      duration: const Duration(seconds: 2),
    );

    final borderAnimation = useAnimation(
      Tween<double>(begin: 2.0, end: 0.05).animate(
        CurvedAnimation(parent: animationController, curve: Curves.easeInOut),
      ),
    );

    final isAnimating = useState(false);
    final customBorderWidth = useState<double>(1.0);
    final useCustomBorder = useState(false);

    useEffect(() {
      if (isAnimating.value) {
        animationController.repeat(reverse: true);
      } else {
        animationController.stop();
      }
      return null;
    }, [isAnimating.value]);

    void toggleAnimation() {
      isAnimating.value = !isAnimating.value;
      useCustomBorder.value = false;
    }

    void setCustomBorderWidth(double value) {
      customBorderWidth.value = value;
      useCustomBorder.value = true;
      isAnimating.value = false;
    }

    double getCurrentBorderWidth() {
      return useCustomBorder.value ? customBorderWidth.value : borderAnimation;
    }

    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    height: 200,
                    width: 200,
                    padding: const EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      border: Border.all(width: getCurrentBorderWidth()),
                    ),
                    child: Align(
                      alignment: Alignment.topLeft,
                      child: SizedBox(
                        height: 100,
                        width: 100,
                        child: Container(
                          decoration: BoxDecoration(
                            border: Border.all(width: getCurrentBorderWidth()),
                          ),
                          child: const Text('MY Text'),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),
            Text(
              'Current Border Width: ${getCurrentBorderWidth().toStringAsFixed(2)}',
              style: const TextStyle(fontSize: 18),
            ),
            const SizedBox(height: 5),
            ElevatedButton(
              onPressed: toggleAnimation,
              child: Text(
                  isAnimating.value ? 'Stop Animation' : 'Start Animation'),
            ),
            const SizedBox(height: 5),
            Slider(
              value: customBorderWidth.value,
              min: 0.05,
              max: 2.0,
              divisions: 39,
              onChanged: setCustomBorderWidth,
              label: customBorderWidth.value.toStringAsFixed(2),
            ),
            const SizedBox(height: 10),
          ],
        ),
      ),
    );
  }
}
