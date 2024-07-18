import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class SwipeBackDetector<T> extends HookWidget {
  final Widget child;
  final double cutoffVelocity;
  final double swipeAreaWidth;
  final double verticalPadding;
  final T? popValue;

  const SwipeBackDetector({
    super.key,
    required this.child,
    this.cutoffVelocity = 100,
    this.swipeAreaWidth = 55,
    this.verticalPadding = 0,
    this.popValue,
  });

  @override
  Widget build(BuildContext context) {
    final dragStart = useState<Offset?>(null);

    final swipeArea = useMemoized(() {
      return Rect.fromPoints(
        Offset(0, verticalPadding),
        Offset(
          swipeAreaWidth,
          MediaQuery.of(context).size.height - verticalPadding,
        ),
      );
    }, [verticalPadding, swipeAreaWidth]);

    bool popGesturePerformed(DragEndDetails dragEnd) {
      return dragStart.value != null &&
          (dragEnd.primaryVelocity?.abs() ?? 0) >= cutoffVelocity;
    }

    void onHorizontalDragStart(DragStartDetails details) {
      if (swipeArea.contains(details.localPosition)) {
        dragStart.value = details.localPosition;
      } else {
        dragStart.value = null;
      }
    }

    void onHorizontalDragUpdate(DragUpdateDetails details) {
      if ((details.primaryDelta ?? 0) < 0) {
        dragStart.value = null; // cancel the gesture if we're going back
      }
    }

    void onHorizontalDragEnd(DragEndDetails details) {
      if (popGesturePerformed(details)) {
        final navigator = Navigator.of(context);
        if (navigator.canPop()) {
          navigator.pop(popValue);
        }
      }
    }

    return GestureDetector(
      behavior: HitTestBehavior.translucent,
      onHorizontalDragStart: onHorizontalDragStart,
      onHorizontalDragUpdate: onHorizontalDragUpdate,
      onHorizontalDragEnd: onHorizontalDragEnd,
      child: child,
    );
  }
}
