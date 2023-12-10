

function organizador(numbers){
    
    numbers.sort(function( a,b){
        return b-a;

        si la necesita de menor a mayor, cambia el b-a, a el a-b;
    });
    console.log(numbers);
}


organizador([1,4,2,5,3]);
