




var bubbleSort = function(t) {

    for (var i = 0; i< t.length; i++) {
        for ( var j =0; j< t.length-1; j++){
            if( t[j] > t[j+1]){
                temp = t[j]
                t[j] = t[j+1]
                t[j+1] = temp
            }

        }
    }
    return t


}

console.log(bubbleSort([7,9,5,6,3]))