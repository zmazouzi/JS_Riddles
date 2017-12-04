/**
 * Created by zakar on 04/12/2017.
 */


// Time Conversion: 12 hour to 24 hour format

var timeConvertor = function (time) {

    if( time.indexOf("PM")) {

        time = time.replace("PM",'');
        time = time.split(':')
        time[0]=  parseInt(time[0])+10

        return time.join()
    }
    else {
        time.replace("AM",'');

        return time
    }



}




console.log(timeConvertor('07:03:15PM'))

// timeConvertor('1:53:55AM'); // "1:53:55"