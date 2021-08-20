const numero1 = document.getElementById("nota1");
const numero2 = document.getElementById("nota2");
const numero3 = document.getElementById("nota3");
const numero4 = document.getElementById("nota4");
const numero5 = document.getElementById("nota5");
const calculateporcentaje = document.getElementById("btn-resultado");
const final = document.getElementById("resultado");



calculateporcentaje.addEventListener("click",promedio);

function promedio(){
    
    let nu1 = parseFloat(numero1.value);
    let nu2 = parseFloat(numero2.value);
    let nu3 = parseFloat(numero3.value);
    let nu4 = parseFloat(numero4.value);
    let nu5 = parseFloat(numero5.value);
    let resultadofinal=(nu1*0.10+nu2*0.10+nu3*0.15+nu4*0.20+nu5*0.45);
    

    if (resultadofinal >= 3.5){
        

        alert("Aprobo")

       
    }
    else{

        alert("No aprobo")
        
    }
    function limpiar(){

        numero1.value
    }
    final.textContent = resultadofinal
    
       




    

} 



