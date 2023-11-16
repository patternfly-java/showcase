goog.module('java.util.Collections');

goog.require('java.lang.Comparable');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.util.ArrayList');
goog.require('java.util.Collection');
goog.require('java.util.Collections.$1');
goog.require('java.util.Collections.EmptyList');
goog.require('java.util.Collections.EmptyListIterator');
goog.require('java.util.Collections.EmptyMap');
goog.require('java.util.Collections.EmptySet');
goog.require('java.util.Collections.LifoQueue');
goog.require('java.util.Collections.RandomHolder');
goog.require('java.util.Collections.SetFromMap');
goog.require('java.util.Collections.SingletonList');
goog.require('java.util.Collections.UnmodifiableCollection');
goog.require('java.util.Collections.UnmodifiableList');
goog.require('java.util.Collections.UnmodifiableMap');
goog.require('java.util.Collections.UnmodifiableRandomAccessList');
goog.require('java.util.Collections.UnmodifiableSet');
goog.require('java.util.Collections.UnmodifiableSortedMap');
goog.require('java.util.Collections.UnmodifiableSortedSet');
goog.require('java.util.Comparator');
goog.require('java.util.Comparators');
goog.require('java.util.Deque');
goog.require('java.util.Enumeration');
goog.require('java.util.HashMap');
goog.require('java.util.HashSet');
goog.require('java.util.Iterator');
goog.require('java.util.List');
goog.require('java.util.ListIterator');
goog.require('java.util.Map');
goog.require('java.util.NavigableMap');
goog.require('java.util.NavigableSet');
goog.require('java.util.Objects');
goog.require('java.util.Queue');
goog.require('java.util.Random');
goog.require('java.util.RandomAccess');
goog.require('java.util.Set');
goog.require('java.util.SortedMap');
goog.require('java.util.SortedSet');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Primitives');

const Collections = goog.require('java.util.Collections$impl');
exports = Collections;
