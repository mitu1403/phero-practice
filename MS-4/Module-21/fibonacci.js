function generateSeries(arr, count){
  for(let i=2; i<count; i++){
    arr[i] = arr[i-1] + arr[i-2]
  }
  return arr;
}
const fibo = [0,1]
const series = generateSeries(fibo, 10);
console.log(series)