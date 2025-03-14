const pi = 3.14;
const formulario = document.querySelector("#formulario");
console.log(formulario);

formulario.addEventListener('submit', function(e) {
    e.preventDefault; //muda o comportamento padrão
    

    const inputraio = e.target.querySelector("#raio");
    const raio = Number(inputraio.value);


    const inputAltura = e.target.querySelector("#Altura");
    const Altura = Number(inputAltura.value);

 
    const volume = calcularvolume(raio, Altura)




    
});
//essa função é responsável por calcular o IMC
function calcularvolume(raio, Altura){
    let imc = (pi*raio**2 *Altura);
    return toFixed(2);
}
