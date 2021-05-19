'use strict';

if (-1 || 0){
     alert( 'first' );
} else if (-1 && 0) {
     alert( 'second' );
} else if (null || -1 && 1) {
     alert( 'third' );
}