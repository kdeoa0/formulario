"boton cerrar"
function cerrando() { 
    window.close();
};

var formdata=[];
"botor formulario"

function pusheando(){
    formdata.push({
        Ruto: document.getElementById("Rut").value,
        Nombre: document.getElementById("Nombres").value,
        Apellido: document.getElementById("Apellidos").value,
        Direccio: document.getElementById("Direccion").value,
        Ciuda: document.getElementById("Ciudad").value,
        Telefon: document.getElementById("Telefono").value,
        Emai: document.getElementById("Email").value,
        Fecha_Nacimient: document.getElementById("Fecha_Nacimiento").value,
        Estado_civi: document.getElementById("Estado_civil").value, 
        Comentario: document.getElementById("Comentarios").value
    });
    console.log(formdata);
};



function formulon(){
    
    var Rutba= document.getElementById("Rut").value;
    var exist = formdata.some(formdata =>(formdata.Ruto=== Rutba));
    console.log(Rutba);
    console.log(exist);

    if (exist){
        if (confirm("La ficha ya existe, quieres reemplazarla?")){
            pusheando()
        }
    } else{
        pusheando()
    };
    }

    
    //document.getElementById("formulario").reset();


"boton busqueda"
function busqueda_apellido(){
    var count = 0;
    var Bapellido = document.getElementById("busqueda").value
    

    var resultados = formdata.filter(function(f) {
        return f.Apellido === Bapellido;
    });
    console.log(resultados);
    "limpiador"
    var limpiador = document.getElementById("result");
    limpiador.innerHTML = "";

    var listabusqueda = document.createElement("ul");
    resultados.forEach(function(f){
        
        var lista = document.createElement("li");
        lista.textContent = formdata[count].Apellido + " " + formdata[count].Ruto;
        count = count + 1;
        listabusqueda.appendChild(lista)
    });
        limpiador.appendChild(listabusqueda)

    
    
};



    
    
    