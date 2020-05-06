function validar() {
    /* var nombre,apellidos,email,password, expresion;

    nombre = document.getElementById("nombre").value; 
    apellidos = document.getElementById("apellidos").value; 
    email = document.getElementById("email").value; 
    password = document.getElementById("passsword").value; 

    expresion = /\w+@\w+\.+[a-z]/;
    
    if(nombre ==="" || apellidos==="" || email==="" || password===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length>45){
        alert("El nombre es muy largo");
        return false;
    }
    else if(apellidos.length>100){
        alert("El apellido es muy largo");
        return false; 
    }
    else if(email.length>100){
        alert("El correo es demasiado largo");
        return false;
    }
    else if(!expresion.test(email)){
        alert("El correo no es válido");
        return false;
    }
    else if(password.length>8){
        alert("La contraseña debe contener 8 caraceteres.");
        return false;
    } */

    var todo_correcto = true;

    /*El primer campo a comprobar es el del nombre. Lo traemos por id y verificamos
    la condición, en este caso, por ejemplo, le decimos que tiene que tener más de dos dígitos
    para que sea un nombre válido. Si no tiene más de dos dígitos, la variable todo_correcto
    devolverá false.*/

    if(document.getElementById('nombre').value.length < 3 ){
        todo_correcto = false;
    }

    /*Hacemos lo mismo con el campo dirección. En este caso le pediremos al usuario que
    introduzca al menos 10 caracteres.*/
    if(document.getElementById('apellidos').value.length < 5 ){
        todo_correcto = false;
    }

    /*Para comprobar la edad, utilizaremos la función isNaN(), que nos dirá si el valor
    ingresado NO es un número (NaN son las siglas de Not a Number). Si la edad no es un
    número, todo_correcto será false.*/
    if(isNaN(document.getElementById('password').value)){
        todo_correcto = false;
    }

    /*Para comprobar el email haremos uso de una expresión regular. Esto es una secuencia
    de caracteres que nos dirá si el valor ingresado por el usuario tiene estructura de
    correo electrónico. Lo que hacemos es obtener el value del campo de texto destinado
    al email, y le aplicamos el método test() del objeto global RegExp(que nos permite
    trabajar con expresiones regulares).*/
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var email = document.form1.email.value;
    if (!expresion.test(email)){
        todo_correcto = false;
    }

    /*Por último, y como aviso para el usuario, si no está todo bién, osea, si la variable
    todo_correcto ha devuelto false al menos una vez, generaremos una alerta advirtiendo
    al usuario de que algunos datos ingresados no son los que esperamos.*/
    if(!todo_correcto){
    alert('Algunos campos no están correctos, vuelva a revisarlos');
    }

    return todo_correcto;
}
