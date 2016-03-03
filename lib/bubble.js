function bubbleSort(array) {
  var swapped;
  var lengthy = array.length;
  for (var i = 0; i < lengthy; i++) {
    var num = array[i];
    if(num > array[i+1]){
      array[i] = array[i+1]
      array[i+1] = num;
      swapped = true;
      lengthy -= 1;
     }
    }
    if(swapped){
    bubbleSort(array)
  }
  return array;
}

function swapsies(){

}

module.exports = bubbleSort;
