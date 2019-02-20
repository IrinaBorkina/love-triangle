/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  k = 0;
  for (var n = 0; n < preferences.length; n++) {
    Sam = preferences[n];
    Mary = preferences[Sam - 1];
    Alex = preferences[Mary - 1];
    
    if (Alex - 1 === n && Sam < Mary && Mary > Alex) {
        k = k + 1;
    }
  }
  return k;
};
