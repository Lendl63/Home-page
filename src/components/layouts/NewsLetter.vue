<template>
<!-- Newsletter CTA Section - Mobile-First Responsive -->
<div class="relative flex items-center justify-center w-full py-12 md:py-16 lg:py-20">
    <!-- Conteneur principal avec max-width -->
    <div class="absolute -top-40 sm:-top-48 lg:-top-64 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <!-- Conteneur CTA avec background image responsive -->
        <div class="relative flex flex-col items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden bg-cover bg-no-repeat bg-center min-h-72 md:min-h-96 lg:min-h-125 lg:px-32" style="background-image: url('/src/assets/cta-img-bg1.jpg')">
            
            <!-- Overlay sombre pour meilleure lisibilité du texte -->
            <div class="absolute inset-0 bg-black/40"></div>
            
            <!-- Contenu du CTA - Positionnement relative au-dessus du background -->
            <div class="relative z-10 flex flex-col items-center gap-6 md:gap-8 lg:gap-10 px-4 md:px-4 lg:px-6 py-8 md:py-8 lg:py-10 text-center">
                
                <!-- Titre responsive -->
                <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Get Or Promo Code by<br class="block" /> Subscribing To our Newsletter
                </h2>
                
                <!-- Formulaire newsletter - Responsive Layout -->
                <form class="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 md:gap-4 py-4 md:py-5 lg:py-6 px-4 md:px-6 lg:px-8 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                    
                    <!-- Input Email - Responsive -->
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter your email" 
                        required 
                        class="w-full sm:flex-1 py-2 md:py-3 px-3 md:px-4 bg-white text-sm md:text-base text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                    >
                    
                    <!-- Bouton Subscribe - Responsive -->
                    <button 
                        type="submit"
                        class="w-full sm:w-auto px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-3 bg-primary hover:opacity-90 text-white text-sm md:text-base font-bold rounded-lg transition-all duration-200 hover:shadow-md shrink-0"
                    >
                        Subscribe
                    </button>
                </form>
                
                <!-- Sous-texte optionnel (si souhaité) -->
                <p class="text-xs md:text-sm text-white/80 max-w-lg">
                    Unsubscribe at any time. No spam, ever.
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
</script>