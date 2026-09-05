// Esperamos a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica para los filtros de Expositores (Píldoras)
    const pills = document.querySelectorAll('.pill');
    
    pills.forEach(pill => {
        pill.addEventListener('click', (event) => {
            // Removemos la clase 'active' de todos los botones
            pills.forEach(p => p.classList.remove('active'));
            
            // Le agregamos la clase 'active' al botón que se hizo clic
            event.target.classList.add('active');
            
            // Acá podés leer el texto del filtro para futura lógica de ocultar/mostrar tarjetas
            const categoriaSeleccionada = event.target.innerText;
            console.log(`Filtro aplicado: ${categoriaSeleccionada}`);
        });
    });

    // 2. Efecto de "Smooth Scroll" para los enlaces de la navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evitamos el salto brusco predeterminado
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if(targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});