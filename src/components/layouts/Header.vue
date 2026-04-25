<template>
    <!-- Header Mobile-First Responsive -->
    <header class="w-full sticky top-0 z-50 bg-white">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5">
            <!-- Conteneur principal flexible -->
            <div class="flex items-center justify-between md:justify-around gap-4 md:gap-6 lg:gap-8">
                
                <!-- Logo et branding (priorité haute sur mobile) -->
                <div class="flex items-center gap-1 md:gap-2 shrink-0">
                    <Logo class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                    <h2 class="text-lg md:text-xl lg:text-2xl font-bold">restaurant</h2>
                </div>

                <!-- Navigation - Responsive avec breakpoints -->
                <nav class="hidden lg:flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-medium">
                    <a href="#menu" class="hover:text-primary transition-all duration-200 hover:scale-110">Menu</a>
                    <a href="#events" class="hover:text-primary transition-all duration-200 hover:scale-110">Events</a>
                    <a href="#gallery" class="hover:text-primary transition-all duration-200 hover:scale-110">Gallery</a>
                    <a href="#about" class="hover:text-primary transition-all duration-200 hover:scale-110">About</a>
                    <a href="#contact" class="hover:text-primary transition-all duration-200 hover:scale-110">Contact</a>
                </nav>

                <!-- Bouton CTA - Adaptatif -->
                <button class="px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 text-sm md:text-base lg:text-lg font-bold text-white bg-primary rounded-btn shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 hover:scale-105 shrink-0">
                    Book a table
                </button>
            </div>

            <!-- Navigation Mobile - Affichée sous le header en mobile/tablet -->
            <nav class="lg:hidden flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm pt-3 md:pt-4 border-t border-gray-100 mt-3 md:mt-4">
                <a href="#menu" class="hover:text-primary transition-all duration-200 font-medium hover:scale-110">Menu</a>
                <span class="text-gray-300">•</span>
                <a href="#events" class="hover:text-primary transition-all duration-200 font-medium hover:scale-110">Events</a>
                <span class="text-gray-300">•</span>
                <a href="#gallery" class="hover:text-primary transition-all duration-200 font-medium hover:scale-110">Gallery</a>
                <span class="text-gray-300">•</span>
                <a href="#about" class="hover:text-primary transition-all duration-200 font-medium hover:scale-110">About</a>
                <span class="text-gray-300">•</span>
                <a href="#contact" class="hover:text-primary transition-all duration-200 font-medium hover:scale-110">Contact</a>
            </nav>
        </div>
    </header>

</template>

<script setup>
    import Logo from '/src/assets/Group 13.svg?component'

</script>