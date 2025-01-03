function getMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (value > max) {
      max = value;
    }

    if (value < min) {
      min = value;
    }
  }

  return {min, max};
}

export default getMinMax;