import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class TestScreen2 extends HookWidget {
  const TestScreen2({super.key});

  @override
  Widget build(BuildContext context) {
    final customColorValue = useState<double>(0.5);

    void setCustomColorValue(double value) {
      customColorValue.value = value;
    }

    final displayedColor = ColorTween(
      begin: const Color.fromARGB(255, 255, 0, 0),
      end: const Color.fromARGB(255, 0, 0, 255),
    ).transform(customColorValue.value);
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
                    width: 300,
                    color: displayedColor,
                  ),
                  Text(
                      'Color: (rgb(${displayedColor?.red}, ${displayedColor?.green}, ${displayedColor?.blue}))')
                ],
              ),
            ),
            Text('Slider : ${customColorValue.value.toString()}'),
            Slider(
              value: customColorValue.value,
              min: 0.0,
              max: 1.0,
              divisions: 100,
              onChanged: setCustomColorValue,
              label: customColorValue.value.toStringAsFixed(2),
            ),
            const SizedBox(height: 10),
          ],
        ),
      ),
    );
  }
}
