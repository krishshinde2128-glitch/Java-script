    let array1 = [1, 0, 2, 3, 4];
    let array2 = [3, 5, 6, 7, 8, 13];

    let result = [];

    for (let i = 0; i < array2.length; i++) {
      if (i < array1.length) {
        result[i] = array1[i] + array2[i];
      } else {
        result[i] = array2[i];
      }
    }

    console.log(result);