import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class AutoSizeTextScreen extends HookWidget {
  @override
  Widget build(BuildContext context) {
    final containerHeight = useState(100.0);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Auto Size Text Demo'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Container(
              height: containerHeight.value,
              width: double.infinity,
              decoration: BoxDecoration(
                border: Border.all(color: Colors.blue, width: 2),
                borderRadius: BorderRadius.circular(8),
              ),
              child: const AutoSizeText(
                'This is an auto sizable text. Resize the container to see the effect. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec ligula nec nunc lacinia ultrices. Donec et metus auctor, fermentum purus sit amet, lacinia felis. Donec ut semper purus. Nullam nec orci nec justo fermentum facilisis. Donec in libero nec libero ultricies fermentum. Nulla facilisi. Integer auctor, mi nec tincidunt auctor, eros purus ultricies nunc, at ultricies lacus nunc nec purus. Sed nec lacinia nunc. Nulla facilisi. Donec nec nunc nec nunc lacinia ultrices. Donec nec nunc nec nunc lacinia ultrices.',
                style: TextStyle(fontSize: 20),
                maxLines: 25,
                minFontSize: 12,
                overflow: TextOverflow.ellipsis,
              ),
            ),
            const SizedBox(height: 20),
            const Text('Adjust Container Height:'),
            Slider(
              value: containerHeight.value,
              min: 50,
              max: 500,
              // divisions: 10,
              label: containerHeight.value.round().toString(),
              onChanged: (double value) {
                containerHeight.value = value;
              },
            ),
          ],
        ),
      ),
    );
  }
}
