document.addEventListener('DOMContentLoaded', function () {
    /*Para obtener la fecha actual*/
    const today = new Date();
    const month = today.getMonth() + 1; /*OJO! Los meses en JS son de 0 a 11*/
    const day = today.getDate();

    /*Saber la epoca del año*/
    let seasonClass = '';

    /*Navidad - del 1/12 al 25/12 | Corregir fechas*/
    if ((month === 12 && day >= 1) || (month === 12 && day <= 25)) {
        seasonClass = 'Navidad';
    }

    /*Verano - del 1/6 al 31/8 | Corregir fechas*/
    else if (month >= 6 && month <= 8) {
        seasonClass = 'Verano';
    }

    /*Halloween - del 25/10 al 31/10) | Fechas corregidas*/
    else if (month === 10 && day >= 25 && day <= 31) {
        seasonClass = 'Halloween';
    }

    /*Aplicarlo al body*/
    if (seasonClass) {
        document.body.classList.add(seasonClass);
    }
});