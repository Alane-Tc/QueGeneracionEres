window.addEventListener("load", function () {
    var boton_calcular = document.querySelector("#Calcular_Gene");
    var Div_resultado = document.querySelector("#MostrarResultado");
    var Div_mosresul = document.querySelector("#Resultado_Final");
    var Limpiar = document.querySelector("#Limpiar_Campos");
    var Mostrar_Imagen = document.querySelector("#Imagen_Generacion");

    function Mostrar() {
        Div_resultado.style.display = "block";
        Div_resultado.style.background = "#3BDB50";
    }

    function div_error() {
        Div_resultado.style.display = "block";
        Div_resultado.style.background = "#ff7171"; //Color red 
    }

    function Esconder() {
        Div_resultado.style.display = "none";
    }

    function GeneracionSilencisa() {
        Mostrar_Imagen.innerHTML = '<img src="ImgGeneraciones/1GeneracionSi.png" width="110px" height="110px">';
    }

    function GeneracionBoomer() {
        Mostrar_Imagen.innerHTML = '<img src="ImgGeneraciones/2boomer.png" width="110px" height="110px">';
    }

    function GeneracionX() {
        Mostrar_Imagen.innerHTML = '<img src="ImgGeneraciones/3GeneracionX.png" width="110px" height="110px">';
    }

    function Millenial() {
        Mostrar_Imagen.innerHTML = '<img src="ImgGeneraciones/4Millenial.png" width="110px" height="110px">';
    }

    function GeneracionZ() {
        Mostrar_Imagen.innerHTML = '<img src="ImgGeneraciones/5GenerecionZ.png" width="110px" height="110px">';
    }

    function GeneracionAlfa() {
        Mostrar_Imagen.innerHTML = '<img src="ImgGeneraciones/6Alfa.png" width="110px" height="110px">';
    }

    function Sad() {
        Mostrar_Imagen.innerHTML = '<img src="ImgGeneraciones/sad.png" width="110px" height="110px">';
    }

    function Alert_Error(){
        Mostrar_Imagen.innerHTML = '<img src="ImgGeneraciones/Sad2.png" width="100px" height="100px">';
    }

    function Generaciones() {
        let s = "Eres de la generación silenciosa";
        let bb = "Eres Baby Boomer";
        let X = "Eres de la generación X";
        let Y = "Eres de la generación Y";
        let Z = "Eres de la generación Z";
        let A = "Eres de la generación Alfa";
        let mensaje = "Olvide el nombre de la generación"
        var pedir_edad = parseInt(document.querySelector("#Edad").value);
        if (pedir_edad <= 0 || isNaN(pedir_edad)) {
            //alert("Error, intentelo de nuevo");
            document.querySelector("#Resu_division").innerHTML = "Error";
            Div_mosresul.innerHTML = "Uy algo salio mal";
            div_error();
            Alert_Error();
            console.log("Show Error");
        } else {
            if (pedir_edad <= 1919) {
                Mostrar();
                Sad();
                Div_mosresul.innerHTML = mensaje;
            }
            if (pedir_edad >= 1920 && pedir_edad <= 1940) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                GeneracionSilencisa();
                Div_mosresul.innerHTML = s;
            }
            if (pedir_edad >= 1941 && pedir_edad <= 1964) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                GeneracionBoomer();
                Div_mosresul.innerHTML = bb;
            }
            if (pedir_edad >= 1965 && pedir_edad <= 1979) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                GeneracionX();
                Div_mosresul.innerHTML = X;
            }
            if (pedir_edad >= 1980 && pedir_edad <= 2000) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                Millenial();
                Div_mosresul.innerHTML = Y;
            }
            if (pedir_edad >= 2001 && pedir_edad <= 2010) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                GeneracionZ();
                Div_mosresul.innerHTML = Z;
            }
            if (pedir_edad >= 2011 && pedir_edad <= 2020) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                GeneracionAlfa();
                Div_mosresul.innerHTML = A;
            }
            if(pedir_edad >=2021){
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                Sad();
                Div_mosresul.innerHTML = mensaje;
            }
        }
    }

    Limpiar.addEventListener("click", function () {
        Esconder();
    });
    boton_calcular.addEventListener("click", function () {
        Generaciones();
    });
});

