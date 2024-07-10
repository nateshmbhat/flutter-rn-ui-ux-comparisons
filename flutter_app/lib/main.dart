import 'package:flutter/material.dart';
import 'package:flutter_poc/screens/blur_test_screen.dart';
import 'package:flutter_poc/screens/border_color_screen.dart';
import 'package:flutter_poc/screens/border_test_screen.dart';
import 'package:flutter_poc/screens/color_test_screen.dart';
import 'package:flutter_poc/screens/gallery_view_source_screen.dart';
import 'package:flutter_poc/screens/hero_anim_source_screen.dart';
import 'package:flutter_poc/screens/image_test_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Border Animation Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: Scaffold(body: Builder(builder: (context) {
        return Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            ElevatedButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const BorderTestScreen()));
                },
                child: Text('Border Test Screen')),
            ElevatedButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const BlurTestScreen()));
                },
                child: Text('Blur Test Screen')),
            ElevatedButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const BorderColorTestScreen()));
                },
                child: Text('Border Color Test Screen')),
            ElevatedButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const ImageTestScreen()));
                },
                child: Text('Image Test Screen')),
            ElevatedButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const HeroAnimSourceScreen()));
                },
                child: Text('Navigation & Hero animations test Screen')),
            ElevatedButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const GalleryViewScreen()));
                },
                child: Text('Gallery View and Blur test Screen')),
            // ElevatedButton(
            //     onPressed: () {
            //       Navigator.of(context).push(MaterialPageRoute(
            //           builder: (context) => const ColorTestScreen()));
            //     },
            //     child: Text('Color test Screen'))
          ],
        );
      })),
    );
  }
}
