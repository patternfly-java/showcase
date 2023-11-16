goog.module('java.util.stream.IntStream');

goog.require('java.lang.Integer');
goog.require('java.lang.Long');
goog.require('java.lang.Runnable');
goog.require('java.util.Arrays');
goog.require('java.util.IntSummaryStatistics');
goog.require('java.util.List');
goog.require('java.util.OptionalDouble');
goog.require('java.util.OptionalInt');
goog.require('java.util.PrimitiveIterator.OfInt');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.IntBinaryOperator');
goog.require('java.util.function.IntConsumer');
goog.require('java.util.function.IntFunction');
goog.require('java.util.function.IntPredicate');
goog.require('java.util.function.IntSupplier');
goog.require('java.util.function.IntToDoubleFunction');
goog.require('java.util.function.IntToLongFunction');
goog.require('java.util.function.IntUnaryOperator');
goog.require('java.util.function.ObjIntConsumer');
goog.require('java.util.function.Supplier');
goog.require('java.util.stream.BaseStream');
goog.require('java.util.stream.DoubleStream');
goog.require('java.util.stream.IntStream.$1');
goog.require('java.util.stream.IntStream.$2');
goog.require('java.util.stream.IntStream.$3');
goog.require('java.util.stream.IntStream.$4');
goog.require('java.util.stream.IntStream.$5');
goog.require('java.util.stream.IntStream.Builder');
goog.require('java.util.stream.IntStreamImpl');
goog.require('java.util.stream.IntStreamImpl.Empty');
goog.require('java.util.stream.LongStream');
goog.require('java.util.stream.Stream');
goog.require('java.util.stream.StreamSupport');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$int');

const IntStream = goog.require('java.util.stream.IntStream$impl');
exports = IntStream;
