/**
 * Created by zakar on 03/12/2017.
 */



// Prob­lem :
//
//  Given a nested array, flat­ten the given array.
//
//  Input :
//
// [1, 2, 3, [4, 5], [6, [7, 8]]]
//
// Out­put :
//
//  [1, 2, 3, 4, 5, 6, 7, 8]



var flattenArr = [];

var flatten = function (array) {

    array.forEach(function (elem) {

        (Array.isArray(elem) ) ? flatten(elem) : flattenArr.push(elem)

    })
    return flattenArr
}

var unflatternArr = [1, 2, 3, [4, 5], [6, [7, 8]]];
console.log(flatten(unflatternArr));