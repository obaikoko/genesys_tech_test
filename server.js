import express from 'express';
const port = 5000;

const nth_most_rate = (arr, n) => {
  // Get the frequency of each integer
  const frequency = arr.reduce((freq, item) => {
    freq[item] = (freq[item] || 0) + 1;
    return freq;
  }, {});

  // Get unique integer from the lntegers
  const uniqueIntegers = Array.from(new Set(arr));

  uniqueIntegers.sort((a, b) => {
    const A = frequency[a];
    const B = frequency[b];

    return A !== B ? A - B : a - b;
  });

  return n > 0 && n <= uniqueIntegers.length ? uniqueIntegers[n - 1] : null;
};

const arr = [5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5];
const n = 2;
console.log(nth_most_rate(arr, n));
// nth_rarest_rate();

const app = express();
app.listen(port, () => console.log(`Server running on ${port}`));
