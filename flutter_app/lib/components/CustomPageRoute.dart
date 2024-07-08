import 'package:flutter/material.dart';

class SwipeBackDetector<T> extends StatefulWidget {
  final Widget child;
  final double cutoffVelocity;
  final double swipeAreaWidth;
  final double verticalPadding;
  final T? popValue;

  const SwipeBackDetector({
    Key? key,
    required this.child,
    this.cutoffVelocity = 100,
    this.swipeAreaWidth = 55,
    this.verticalPadding = 0,
    this.popValue,
  }) : super(key: key);

  @override
  _SwipeBackDetectorState createState() => _SwipeBackDetectorState();
}

class _SwipeBackDetectorState extends State<SwipeBackDetector> {
  Offset? dragStart;
  late Rect swipeArea;

  @override
  void didChangeDependencies() {
    swipeArea = Rect.fromPoints(
      Offset(0, widget.verticalPadding),
      Offset(
        widget.swipeAreaWidth,
        MediaQuery.of(context).size.height - widget.verticalPadding,
      ),
    );
    super.didChangeDependencies();
  }

  bool _popGesturePerformed(DragEndDetails dragEnd) {
    return dragStart != null &&
        (dragEnd.primaryVelocity?.abs() ?? 0) >= widget.cutoffVelocity;
  }

  void _onHorizontalDragStart(DragStartDetails details) {
    if (swipeArea.contains(details.localPosition)) {
      dragStart = details.localPosition;
    } else {
      dragStart = null;
    }
  }

  void _onHorizontalDragUpdate(DragUpdateDetails details) {
    if ((details.primaryDelta ?? 0) < 0) {
      dragStart = null; //cancel the gesture if we're going back
    }
  }

  void _onHorizontalDragEnd(DragEndDetails details) {
    if (_popGesturePerformed(details)) {
      final navigator = Navigator.of(context);
      if (navigator.canPop()) {
        navigator.pop(widget.popValue);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      behavior: HitTestBehavior.translucent,
      onHorizontalDragStart: _onHorizontalDragStart,
      onHorizontalDragUpdate: _onHorizontalDragUpdate,
      onHorizontalDragEnd: _onHorizontalDragEnd,
      child: widget.child,
    );
  }
}
