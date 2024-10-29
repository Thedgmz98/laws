document.addEventListener('DOMContentLoaded', function() { 
    const progressBar = document.getElementById('progress');
    const percentageText = document.getElementById('percentage');
    const targetWidth = 11.82; 
    let currentWidth = 0;
    
    function animateProgressBar() {
        if (currentWidth < targetWidth) {
            currentWidth += 0.1;
            progressBar.style.width = currentWidth + '%';
            percentageText.textContent = currentWidth.toFixed(1) + '%'; 
            requestAnimationFrame(animateProgressBar);
        } else {
            percentageText.textContent = targetWidth.toFixed(1) + '%'; 
        }
    }
    
    animateProgressBar();
});



function abrirWhatsApp(){
    var numero = "+573173056377";
    var mensaje = "Hola! Me gustaria recibir ayuda."; 
    var url = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}

document.querySelectorAll('.options a').forEach((anchor, index) => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionClasses = ['banner', 'pepo', 'madre', 'testi' ,'padre'];
        const targetClass = sectionClasses[index];
        const targetSection = document.querySelector(`.${targetClass}`);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
