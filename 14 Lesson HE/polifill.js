'use strict'

if (!Array.prototype.max) {
    Array.prototype.max = function () {
        let t = Object(this), len = t.length >>> 0, k = 0, value;
        let count = 0;
        if (arguments.length >= 2) {
         value = arguments[1];
        } else{
         while (k = len && !(k in t)){
            k++;
         }
         if (k >= len) {
            throw new TypeError('Max of empty array with no initial value');
         }
         value = t[k++];
        }
        for (; k < len; k++) {
            if (Object(this)[k] > count) {
                count = Object(this)[k];
            }
        }
        return console.log(count);
    }
}

[6, 5, 8, 7].max()