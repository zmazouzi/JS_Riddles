

// increment the value of a giving array of numbers by one
// increment([2, 7, 3]) returns [2, 7, 4]

var increment = function (numbers) {

    iterator = numbers.length- 1;
    while( iterator >= 0){

        var num = numbers[iterator];
        num++;
        if( num>=0 && num <=9 ) {
            numbers[iterator] = num;
            break
        }
        else {
            numbers[iterator] =0 ;
            if( iterator == 0) {
                numbers.unshift(1)
            }

        }

        iterator--;
    }
    return numbers


}
console.log(increment([9,9]))

