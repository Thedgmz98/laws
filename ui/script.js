document.addEventListener('DOMContentLoaded', function() { 
    const progressBar = document.getElementById('progress');
    const percentageText = document.getElementById('percentage');
    const targetWidth = 11.82; 
    
    function animateProgressBar() {
        if (currentWidth < targetWidth) {
            currentWidth += 0.1;
            progressBar.style.width = currentWidth + '%';
            percentageText.textContent = currentWidth.toFixed(1) + '%'; // Actualiza el texto del porcentaje
            requestAnimationFrame(animateProgressBar);
        } else {
            percentageText.textContent = targetWidth.toFixed(1) + '%'; // Asegurar que el texto llegue al porcentaje exacto
        }
    }
    
    animateProgressBar();
});
