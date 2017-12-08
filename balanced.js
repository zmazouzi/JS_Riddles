

//  Simple Balanced Parentheses


var balanced =function (string) {
    list = string.split('');
    console.log(list)
    stack = [];

    for (var i =0 ; i < list.length; i++) {

        if (list[i] == '('){
            stack.push(list[i]);
            console.log(" ( found : "+list[i])
            console.log(stack)

            }
        else  if ( list[i] == ')' && stack.length >0 ){
            stack.pop();
            console.log(" ) found : "+list[i])
            console.log(stack)
        }
        else {
            return false

        }


           }
        console.log(stack)
     return stack.length ==  0
}

console.log(balanced(")(()()())"))
