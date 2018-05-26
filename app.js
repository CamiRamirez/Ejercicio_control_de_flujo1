
let age = prompt('¿Cual es tu edad?');

    if (age >=1 && age < 3) {
        document.write('You are a toddler');
    } else if (age >=3 && age <12) {
        document.write('You are a preschooler');  
    } else if (age >=12 && age <18) {
        document.write('You are a teenager');
    } else if (age >=18 && age <35 ) {
        document.write('You are a young adult');   
    } else if (age >=35 ){
        document.write('You are a adult');      
    } else{
        alert('El valor no es correcto, prueba nuevamente sólo con números ;)');
    }
