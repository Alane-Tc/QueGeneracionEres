window.addEventListener("load", function () {
    var boton_calcular = document.querySelector("#Calcular_Gene");
    var Div_resultado = document.querySelector("#MostrarResultado");
    var Div_mosresul = document.querySelector("#Resultado_Final");
    var Limpiar = document.querySelector("#Limpiar_Campos");

    function Mostrar() {
        Div_resultado.style.display = "block";
        Div_resultado.style.background = "cadetblue";
    }

    function Esconder() {
        Div_resultado.style.display = "none";
    }

    function Generaciones() {
        let s = "Eres de la generación silenciosa";
        let bb = "Eres Baby Boomer";
        let X = "Eres de la generación X";
        let Y = "Eres de la generación Y";
        let Z = "Eres de la generación Z";
        let mensaje = "Olvide el nombre =("
        var pedir_edad = parseInt(document.querySelector("#Edad").value);
        if (pedir_edad <= 0 || isNaN(pedir_edad)) {
            alert("Error");
        } else {
            if (pedir_edad <= 1919) {
                alert("Lo siento, no recuerdo el nombre de esta generación");
            }
            if (pedir_edad >= 1920 && pedir_edad <= 1940) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                Div_mosresul.innerHTML = s;
            }
            if (pedir_edad >= 1941 && pedir_edad <= 1964) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                Div_mosresul.innerHTML = bb;
            }
            if (pedir_edad >= 1965 && pedir_edad <= 1979) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                Div_mosresul.innerHTML = X;
            }
            if (pedir_edad >= 1980 && pedir_edad <= 2000) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                Div_mosresul.innerHTML = Y;
            }
            if (pedir_edad >= 2001 && pedir_edad <= 2010) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
                Div_mosresul.innerHTML = Z;
            }
            if (pedir_edad >= 2011) {
                document.querySelector("#Resu_division").innerHTML = pedir_edad;
                Mostrar();
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

