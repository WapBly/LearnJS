let n = 15;

nextPrime:
for (let i = 2; i <= n; i++) {
    console.log( 'i=', i );
    for (let j = 2; j < i; j++) {
        console.log( 'j=', j );
        if (i % j == 0){
            console.log('i % j == 0 jump to next i');
        continue nextPrime;
        }
    }
    console.log( 'this number is prime', i );
}