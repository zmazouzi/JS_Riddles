/**
 * Created by zakar on 05/12/2017.
 */


// Bubble SORT algorithm

var selectionSort = function (t) {
    var indexMin;

    for (var i =0 ; i < t.length-1; i++) {
            indexMin = i
        for (var j =i ; j < t.length; j++) {

                if(t[j]< t[indexMin]) {
                    indexMin =j
                }


               }
        if( indexMin !== i) {


                [t[i],t[indexMin]] = [t[indexMin],t[i]]
        }

           }
    return t




}

console.log(selectionSort([9,5,4,6]))