const detallar = (pesocorporal, altura) => {
    return {
        peso: pesocorporal,
        altura: altura
    };
};

const resultado = (detalle, total) => {
    if (total < 18.5 && total > 0) {
        alert(
            `Valores Introducidos: 
            Peso: ${detalle.peso} 
            Altura: ${detalle.altura}
            ======================
            Su Indice de Masa Corporal es: ${total.toFixed(2)}
            Si su IMC es menos de 18.5 se encuentra en un peso insuficiente`
        );
    } else if (total <= 24.9 && total >= 18.5) {
        alert(
            `Valores Introducidos: 
            Peso: ${detalle.peso} 
            Altura: ${detalle.altura}
            ======================
            Su Indice de Masa Corporal es: ${total.toFixed(2)}
            Si su IMC es entre 18.5 y 24.9, se encuentra dentro del rango de peso normal o saludable.`
        );
    } else if (total >= 25.0 && total < 30) {
        alert(
            `Valores Introducidos: 
            Peso: ${detalle.peso} 
            Altura: ${detalle.altura}
            ======================
            Su Indice de Masa Corporal es: ${total.toFixed(2)}
            Si su IMC es entre 25.0 y 29.9, se encuentra dentro del rango de sobrepeso.`
        );
    } else {
        alert(
            `Valores Introducidos: 
            Peso: ${detalle.peso} 
            Altura: ${detalle.altura}
            ======================
            Su Indice de Masa Corporal es: ${total.toFixed(2)}
            Si su IMC es 30.0 o superior, se encuentra dentro del rango de obesidad.`
        );
    }
};

let detalles = [];
let total = 0;

do {
    pesocorporal = Number(prompt("Ingrese su peso corporal: "));
    altura = Number(prompt("Ingrese su altura, Ej \"1.70\" : "));
    console.log(pesocorporal);
    console.log(altura);

    if (isNaN(pesocorporal) || isNaN(altura)) {
        alert("Ingrese valores numéricos");
        continue;
    }

    total += pesocorporal / Math.pow(altura, 2);
    detalles.push(detallar(pesocorporal, altura));

    rta = prompt("Ingrese \"ok\" para calcular.").toUpperCase();
} while (rta !== "OK");

resultado(detalles[detalles.length - 1], total);

