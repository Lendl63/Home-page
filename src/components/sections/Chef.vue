<template>
    <section id="chef" class="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 py-6 md:py-8 lg:py-12">
            <div class="absolute -z-5 w-full h-full">
              <img src="/src/assets/Vector.png" alt="Image" class="absolute top-30 -left-8 opacity-35 -rotate-120">
              <img src="/src/assets/Vector_3.svg" alt="Image" class="absolute top-25 left-30 opacity-30 scale-200">
            </div>
            <!-- Contenu texte -->
            <div class="flex flex-col items-start w-full md:w-1/2 p-4 md:p-6 lg:p-8" v-scroll-in="'scroll-in-left'">
                <h2 class="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-4 md:mb-5 lg:mb-6">Notre Chef Talentueux</h2>
                <p class="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 lg:mb-10">
                    Avec 15 ans d'expérience en cuisine asiatique,<br class="hidden md:block"/> notre chef crée des plats innovants qui<br class="hidden md:block"/> fusionnent tradition et modernité avec passion.
                </p>
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 w-full sm:w-auto">
                    <button class="rounded-btn text-white bg-black text-sm md:text-base px-6 md:px-8 py-2 md:py-3 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                        Menu
                    </button>
                    <button class="rounded-btn text-white bg-primary text-sm md:text-base px-6 md:px-8 py-2 md:py-3 hover:opacity-90 transition-all duration-300 hover:scale-105">
                        Book to table
                    </button>
                </div>
            </div>

            <!-- Image -->
            <div class="w-full md:w-1/2 flex justify-center" v-scroll-in="'scroll-in-right'">
                <img 
                    :src="ChefImage" 
                    alt="Chef" 
                    loading="lazy" 
                    class="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto"
                >
            </div>
        </div>
    </section>
</template>

<script setup>
    import ChefImage from '/src/assets/chef 1.jpg';
</script>