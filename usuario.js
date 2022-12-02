var usuario = "user";
    var pass= "1234";
    var username, password;
    var condicion;

    do{

        username=prompt("Ingrese su usuario");
        password=prompt("Ingrese su contraseña");

        if(username!=usuario || pass!=password){
            alert("su usuario o contraseña no son validos");
            condicion=true;
        }else{
            condicion=false;
            alert("inicio de sesion exitoso");
        }

    }while(condicion);  
  
  