/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let k = 0;
  for (let n = 0; n < preferences.length; n++) {
    let next1 = preferences[n] - 1;
    if (next1 == n) continue;
    let next2 = preferences[next1] - 1;
    if (next1 == next2) continue;
    let next3 = preferences[next2] - 1;
    if (next3 == next2) continue;
    if (next3 === n) {
        k++;
    }
  }
  return k / 3;
};
