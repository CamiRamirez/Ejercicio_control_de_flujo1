
let age = prompt('¿Cual es tu edad?');

    if (age >=1 && age < 3) {
        document.write('You are a toddler (Eres un niño pequeño');
    } else if (age >=3 && age <12) {
        document.write('You are a preschooler (Eres un preescolar) ');  
    } else if (age >=12 && age <18) {
        document.write('You are a teenager (Eres un adolescente)');
    } else if (age >=18 && age <35 ) {
        document.write('You are a young adult (Eres un adulto joven)');   
    } else if (age >=35 ){
        document.write('You are a adult (Eres un adulto)');      
    } else{
        alert('El valor no es correcto, prueba nuevamente sólo con números ;)');
    }
