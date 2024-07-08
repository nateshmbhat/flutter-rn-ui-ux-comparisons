import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_poc/images.dart';

class GalleryViewTargetScreen extends HookWidget {
  const GalleryViewTargetScreen({super.key, required this.clickedImage});
  final String clickedImage;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: CustomScrollView(
          physics: const BouncingScrollPhysics(),
          slivers: [
            SliverAppBar(
              automaticallyImplyLeading: false,
              stretch: true,
              floating: true,
              expandedHeight: 400,
              flexibleSpace: FlexibleSpaceBar(
                stretchModes: [
                  StretchMode.blurBackground,
                  StretchMode.zoomBackground
                ],
                background: Hero(
                  tag: clickedImage,
                  child: Image.network(
                    clickedImage,
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
            SliverGrid.count(
              crossAxisCount: 2,
              children: images.where((a) => a != clickedImage).map(
                (url) {
                  return Hero(tag: url, child: Image.network(url));
                },
              ).toList(),
            )
          ],
        ),
      ),
    );
  }
}
