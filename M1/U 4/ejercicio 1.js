var distancia
distancia = prompt("Ingrese la distancia a recorrer:", '');
distancia = parseInt(distancia)

if (distancia >= 0 && distancia <= 1000) {
    alert('Es mejor recorrer a pie.'); document.write('Es beneficioso para su salud.')

} else {
    if (distancia >= 1000 && distancia <= 10000) {
        alert('Es mejor utilizar la bicicleta.'); document.write('Muy bien. Haga ejercicios.')

    } else {
        if (distancia >= 10000 && distancia <= 30000) {
            alert('Es necesario utilizar el colectivo.'); document.write('Si está apurado, siga este consejo.')
        } else {
            if (distancia >= 30000 && distancia <= 100000) {
                alert('Es más cómodo ir en su auto.'); document.write('Usted decide cuándo y cómo salir.')
            } else {
                if (distancia >= 100000) {
                    alert('No maneje tantos kilómetros, vaya en AVIÓN.'); document.write('No hacemos préstamos. Sólo aconsejamos.')
                }
            }
        }
    }
}

