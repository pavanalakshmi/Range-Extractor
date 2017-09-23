// Created by pavani

function solution(list){
    var sorted = list.slice().sort(function(a,b) {return a-b});
    var result = [];

    while( sorted.length > 0 ) {
        var index = 0;
        while ( sorted[index + 1] !== undefined && sorted[ index + 1 ] === sorted[ index ] + 1 ) {
            index += 1;
        }
        if (index < 2) {
            for (var i = 0; i <= index; i += 1) {
                result.push( sorted.shift() );
            }
        }
        if (index >= 2) {
            result.push( sorted[0] + '-' + sorted[index] );
            sorted.splice(0, index + 1 );
        }
    }
    return result.join(',');
}
