import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_poc/images.dart';

class HeroAnimTargetScreen extends HookWidget {
  const HeroAnimTargetScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blueGrey.shade200,
      body: SafeArea(
        child: Center(
          child: CustomScrollView(
            slivers: [
              SliverAppBar(
                leading: null,
                backgroundColor: Colors.blueGrey.shade200,
                automaticallyImplyLeading: false,
                stretch: true,
                expandedHeight: 400,
                flexibleSpace: FlexibleSpaceBar(
                  background: Hero(
                    tag: 'big-image',
                    child: Image.network(
                      images[1],
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
              const SliverToBoxAdapter(
                child: Text(
                  'Screen 3 contents lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  style: TextStyle(fontSize: 24),
                  overflow: TextOverflow.ellipsis,
                  maxLines: 8,
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
