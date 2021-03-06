"use strict";
var $resultP = $('#result').text();


var showResult = (val) => {
    $('#result').html(val);
};

var highlightFoundText = (text, regex) => {
    let pattern = "", flags = "";

    /*v.1*/
    // let array = regex.split('/');
    // let n = array.length - 1;
    // flags = array[n];
    // for (let i = 1; i < n; ++i) {
    //     pattern += (i == 1 || i == n)
    //         ? pattern += array[i]
    //         : pattern += array[i] + '/';
    // }

    /*v.2*/
    let array = regex.match(/\/(.+)\/([gimy]{0,3})/);
    pattern = array[1];
    flags = array[2];

    let myRegex = new RegExp(pattern, flags);
    let result = text.replace(myRegex,"<mark>$&</mark>");


    showResult(result);
};


$('#btn-regex').click((event) => {
    let text = $('#text').val();
    let regex = $('#regex').val();
    highlightFoundText(text, regex);
});
