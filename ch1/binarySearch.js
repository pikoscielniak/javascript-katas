function rank(key, a, depth) { // Array must be sorted.
  var lo = 0;
  var hi = a.length - 1;
  while (lo <= hi) { // Key is in a[lo..hi] or not present.
    var mid = lo + (hi - lo) / 2;
    if
      (key < a[mid]) hi = mid - 1;
    else if (key > a[mid]) lo = mid + 1;
    else
      return mid;
  }
  return -1;
}
