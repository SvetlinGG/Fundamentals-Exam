function distinct(arr){
    
    let newArr = [...new Set(arr)];
    console.log(newArr.join(' '));

}
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinct([20, 8, 12, 13, 4, 4, 8, 5]);