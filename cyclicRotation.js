function solution(arr, k) {
  if(arr && arr.length > 0){
    let len = arr.length;
    for(let i =0; i < k % len; i++){
      arr.unshift(arr.pop()); 
    }
  }
  return arr;
}