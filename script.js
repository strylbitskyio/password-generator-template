function calculateEntropy(length, poolSize) {
  return Math.round(length * Math.log2(poolSize));
}
