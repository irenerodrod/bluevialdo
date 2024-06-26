document.addEventListener('DOMContentLoaded', function () {
    /* Para obtener la fecha actual */
    const today = new Date();
    const month = today.getMonth() + 1; /*OJO! Los meses en JS son de 0 a 11*/
    const day = today.getDate();

    /* Saber la epoca del año */
    let seasonClass = '';
    let animationType = '';

    /**/ 
    /* LOGICA PARA LAS ESTACIONES */
    /**/ 

    /* primavera - del 20/3 al 21/6 */
    if ((month === 3 && day >= 20) || (month === 6 && day <= 21) || (month >= 4 && month <= 5)) {
        seasonClass = 'primavera';
        animationType = 'petal';
    }
    /* verano - del 22/6 al 22/9 */
    else if ((month === 6 && day >= 22) || (month === 9 && day <= 22) || (month >= 7 && month <= 8)) {
        seasonClass = 'verano';
        animationType = 'sun';
    }
    /* otoño - del 23/9 al 22/12 */
    else if ((month === 9 && day >= 23) || (month === 12 && day <= 22) || (month >= 10 && month <= 11)) {
        seasonClass = 'otoño';
        animationType = 'leaf';
    }
    /* invierno - del 23/12 al 19/3 */
    else if ((month === 12 && day >= 23) || (month === 3 && day <= 19) || (month >= 1 && month <= 2)) {
        seasonClass = 'invierno';
        animationType = 'snowflake';
    }

    /**/
    /* LOGICA DE LOS EVENTOS */
    /**/

    /* navidad - del 25/12 al 6/1 */
    if ((month === 12 && day >= 25) || (month === 1 && day <= 6)) {
        seasonClass = 'navidad';
        animationType = 'snowflake';
    }
    /* halloween - del 30/10 al 1/11 */
    else if ((month === 10 && day >= 30) || (month === 11 && day <= 1)) {
        seasonClass = 'halloween';
        animationType = 'ghost';
    }
    /* dia de los inocentes - 28/12 */
    else if (month === 12 && day === 28) {
        seasonClass = 'dia de los inocentes';
        animationType = 'ghost';
    }

    /**/
    /* LOGICA PARA APLICAR LAS ANIMACIONES */
    /**/

    if (animationType) {
        const animationContainer = document.createElement('div');
        animationContainer.className = 'animation';
        document.body.appendChild(animationContainer);

        for (let i = 0; i < 100; i++) {
            const animationElement = document.createElement('div');
            animationElement.className = animationType;
            animationElement.style.left = `${Math.random() * 100}vw`;
            animationElement.style.animationDuration = `${Math.random() * 3 + 2}s`;
            animationContainer.appendChild(animationElement);
        }

        const toggleAnimationButton = document.createElement('button');
        toggleAnimationButton.textContent = 'Toggle Animation';
        toggleAnimationButton.style.position = 'fixed';
        toggleAnimationButton.style.bottom = '20px';
        toggleAnimationButton.style.right = '20px';
        toggleAnimationButton.style.zIndex = '10000';
        document.body.appendChild(toggleAnimationButton);

        toggleAnimationButton.addEventListener('click', () => {
            animationContainer.style.display = animationContainer.style.display === 'none' ? 'block' : 'none';
        });
    }
});