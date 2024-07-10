import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_poc/images.dart';
import 'package:flutter_poc/screens/gallery_view_target_screen.dart';

enum PageTransitionOption { Default, Fade, Scale, Slide, FadedSlide }

class SlowPageRoute<T> extends MaterialPageRoute<T> {
  SlowPageRoute({required super.builder, super.settings});
  @override
  Duration get transitionDuration =>
      const Duration(seconds: 2); // Adjust the duration as needed
}

class GalleryViewScreen extends HookWidget {
  const GalleryViewScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Gallery Listing Screen'),
      ),
      body: SafeArea(
        child: Column(
          children: [
            // const Text(
            //   'Gallery Listing Screen',
            //   style: TextStyle(fontSize: 34),
            // ),
            Expanded(
              child: GridView.count(
                  shrinkWrap: true,
                  crossAxisCount: 3,
                  childAspectRatio: 1,
                  children: images.map(
                    (url) {
                      return GestureDetector(
                        child: Hero(
                            tag: url,
                            child: Image.network(
                              fit: BoxFit.cover,
                              url,
                              loadingBuilder:
                                  (context, child, loadingProgress) {
                                if (loadingProgress == null) return child;
                                return Container(
                                    child: CircularProgressIndicator());
                              },
                            )),
                        onTap: () {
                          Navigator.of(context).push(SlowPageRoute(
                              builder: (context) => GalleryViewTargetScreen(
                                    clickedImage: url,
                                  )));
                        },
                      );
                    },
                  ).toList()),
            ),
          ],
        ),
      ),
    );
  }
}
