import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_poc/images.dart';
import 'package:flutter_poc/screens/hero_anim_target_screen.dart';

enum PageTransitionOption { Default, Fade, Custom, Slide, FadedSlide }

class HeroAnimSourceScreen extends HookWidget {
  const HeroAnimSourceScreen({super.key});

  void handlePageTransition(BuildContext context, PageTransitionOption option) {
    PageRoute route;
    if (option == PageTransitionOption.Default) {
      route =
          MaterialPageRoute(builder: (context) => const HeroAnimTargetScreen());
    } else {
      route = PageRouteBuilder(
        pageBuilder: (context, animation, secondaryAnimation) =>
            const HeroAnimTargetScreen(),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          if (option == PageTransitionOption.Custom) {
            return SlideTransition(
              position: Tween<Offset>(
                begin: const Offset(1.0, 0.0),
                end: Offset.zero,
              ).chain(CurveTween(curve: Curves.ease)).animate(animation),
              child: ScaleTransition(
                  scale: animation,
                  child: RotationTransition(
                    turns: animation.drive(Tween(begin: 0, end: 3)),
                    child: child,
                  )),
            );
          } else if (option == PageTransitionOption.Fade) {
            return FadeTransition(opacity: animation, child: child);
          } else if (option == PageTransitionOption.Slide) {
            return SlideTransition(
              position: Tween<Offset>(
                begin: const Offset(1.0, 0.0),
                end: Offset.zero,
              ).chain(CurveTween(curve: Curves.ease)).animate(animation),
              child: child,
            );
          } else if (option == PageTransitionOption.FadedSlide) {
            return FadeTransition(
              opacity: animation,
              child: SlideTransition(
                position: Tween<Offset>(
                  begin: const Offset(0.0, 1.0),
                  end: Offset.zero,
                )
                    .chain(CurveTween(curve: Curves.easeOutCubic))
                    .animate(animation),
                child: child,
              ),
            );
          }
          return child;
        },
        transitionDuration: Duration(
            milliseconds: option == PageTransitionOption.Custom
                ? 3000
                : 1000), // Adjust this value
        reverseTransitionDuration:
            const Duration(milliseconds: 1000), // For pop transitions
      );
    }

    Navigator.of(context).push(route);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Screen 2',
              style: TextStyle(fontSize: 34),
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Hero(
                  tag: 'big-image',
                  child: Image(
                    image: NetworkImage(images[0]),
                    width: 250,
                    fit: BoxFit.contain,
                  ),
                ),
                ElevatedButton(
                    onPressed: () {
                      handlePageTransition(
                          context, PageTransitionOption.Default);
                    },
                    child: const Text("Open Screen (Default)")),
                ElevatedButton(
                    onPressed: () {
                      handlePageTransition(context, PageTransitionOption.Fade);
                    },
                    child: const Text("Open Screen (Fade Transition)")),
                ElevatedButton(
                    onPressed: () {
                      handlePageTransition(context, PageTransitionOption.Slide);
                    },
                    child: const Text("Open Screen (Slide Transition)")),
                ElevatedButton(
                    onPressed: () {
                      handlePageTransition(
                          context, PageTransitionOption.FadedSlide);
                    },
                    child: const Text("Open Screen (Faded Slide Transition)")),
                ElevatedButton(
                    onPressed: () {
                      handlePageTransition(
                          context, PageTransitionOption.Custom);
                    },
                    child: const Text(
                        "Open Screen (Custom slow mixed Transition)")),
              ],
            ),
            const SizedBox(height: 10),
          ],
        ),
      ),
    );
  }
}
