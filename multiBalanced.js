



var balanced = function (string) {
    d = { '{': '}', '[': ']', '(': ')'}
    l = string.split('');
    s = [];
    for (var i =0 ; i < l.length; i++) {

            if(l[i] in d) {
                s.push(l[i])

            }
            else{
                if( l[i] == d[s[s.length-1]] && s.length > 0 ){
                    s.pop()
                    
                }
                else {

                    return false
                }
            }
    }
    console.log(s)
    return s.length == 0
}
console.log(balanced(')()(([[]]))'))