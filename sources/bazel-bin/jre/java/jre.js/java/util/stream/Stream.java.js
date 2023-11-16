goog.module('java.util.stream.Stream');

goog.require('java.lang.Long');
goog.require('java.lang.Runnable');
goog.require('java.util.Arrays');
goog.require('java.util.Collections');
goog.require('java.util.Comparator');
goog.require('java.util.List');
goog.require('java.util.Optional');
goog.require('java.util.Set');
goog.require('java.util.Spliterator');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.BiFunction');
goog.require('java.util.function.BinaryOperator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Function');
goog.require('java.util.function.IntFunction');
goog.require('java.util.function.Predicate');
goog.require('java.util.function.Supplier');
goog.require('java.util.function.ToDoubleFunction');
goog.require('java.util.function.ToIntFunction');
goog.require('java.util.function.ToLongFunction');
goog.require('java.util.function.UnaryOperator');
goog.require('java.util.stream.BaseStream');
goog.require('java.util.stream.Collector');
goog.require('java.util.stream.DoubleStream');
goog.require('java.util.stream.IntStream');
goog.require('java.util.stream.LongStream');
goog.require('java.util.stream.Stream.$1');
goog.require('java.util.stream.Stream.$2');
goog.require('java.util.stream.Stream.$3');
goog.require('java.util.stream.Stream.$4');
goog.require('java.util.stream.Stream.Builder');
goog.require('java.util.stream.StreamImpl');
goog.require('java.util.stream.StreamImpl.Empty');
goog.require('java.util.stream.StreamSupport');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Stream = goog.require('java.util.stream.Stream$impl');
exports = Stream;
