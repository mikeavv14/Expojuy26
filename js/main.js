// Esperamos a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================
    1. MENÚ RESPONSIVE (Móviles / Tablets)
    =================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const toggleIcon = menuToggle ? menuToggle.querySelector('i') : null;

    if (menuToggle && navMenu) {
        // Abrir / Cerrar menú al presionar el botón hamburguesa
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');

            // Cambiar ícono entre 'bx-menu' y 'bx-x' (cerrar)
            if (toggleIcon) {
                if (navMenu.classList.contains('active')) {
                    toggleIcon.classList.replace('bx-menu', 'bx-x');
                } else {
                    toggleIcon.classList.replace('bx-x', 'bx-menu');
                }
            }
        });

        // Cerrar el menú si se hace clic fuera de la barra de navegación
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                if (toggleIcon) toggleIcon.classList.replace('bx-x', 'bx-menu');
            }
        });
    }

    /* ===================================================
       2. LOGO: Desplazamiento suave al inicio (Top)
    =================================================== */
    const logoLink = document.querySelector('.brand-logo');

    if (logoLink) {
        logoLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Si el menú móvil estaba abierto, lo cerramos
            if (navMenu) {
                navMenu.classList.remove('active');
                if (toggleIcon) toggleIcon.classList.replace('bx-x', 'bx-menu');
            }
        });
    }

    /* ===================================================
       3. SMOOTH SCROLL PARA ENLACES DE NAVEGACIÓN
    =================================================== */
    const navLinks = document.querySelectorAll('.nav-links a, .hero-buttons a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Si es un enlace interno tipo #seccion
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // En celular, cerramos el menú tras elegir la sección
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        if (toggleIcon) toggleIcon.classList.replace('bx-x', 'bx-menu');
                    }
                }
            }
        });
    });

    /* ===================================================
       4. FILTROS DE EXPOSITORES (Píldoras)
    =================================================== */
    const pills = document.querySelectorAll('.pill');

    pills.forEach(pill => {
        pill.addEventListener('click', (event) => {
            // Removemos la clase 'active' de todos los botones
            pills.forEach(p => p.classList.remove('active'));

            // Le agregamos la clase 'active' al botón que se hizo clic
            event.target.classList.add('active');

            const categoriaSeleccionada = event.target.innerText.trim();
            console.log(`Filtro aplicado: ${categoriaSeleccionada}`);
        });
    });

});
