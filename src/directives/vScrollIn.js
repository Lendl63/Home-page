export const vScrollIn = {
    mounted(el, binding) {
        const animationClass = binding.value || 'scroll-in';
        
        // Ajouter la classe initiale pour masquer l'élément
        el.style.opacity = '0';
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Ajouter la classe d'animation quand l'élément est visible
                        el.classList.add(animationClass);
                        // Désabonner l'observateur après l'animation
                        observer.unobserve(el);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        observer.observe(el);
        
        // Stocker l'observateur pour nettoyage si nécessaire
        el._scrollInObserver = observer;
    },
    
    unmounted(el) {
        if (el._scrollInObserver) {
            el._scrollInObserver.disconnect();
            delete el._scrollInObserver;
        }
    }
};
