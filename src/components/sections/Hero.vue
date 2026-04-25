<template>
 <section id="hero" class="w-full max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-20">
        <!-- Texte et contenu -->
        <div class="w-full lg:w-1/2 flex flex-col gap-6 md:gap-7 lg:gap-8" v-scroll-in="'scroll-in-left'">
            <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold text-black leading-tight">
                Découvrez une expérience<br class="hidden sm:block" /> culinaire exceptionnelle
            </h1>
            
            <div class="flex flex-col items-start gap-4 md:gap-5 lg:gap-6">
                <p class="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-md">
                    Savourez les meilleures saveurs<br class="hidden md:block" /> de la cuisine asiatique traditionnelle<br class="hidden md:block" /> avec une touche moderne et créative.
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

            <!-- Icônes sociales -->
            <div class="flex items-center gap-4 md:gap-5 lg:gap-6 pt-4 md:pt-6">
                <Instagram class="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 hover:text-primary transition-all duration-300 cursor-pointer hover:scale-125" />
                <Facebook class="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 hover:text-primary transition-all duration-300 cursor-pointer hover:scale-125" />
                <Twitter class="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 hover:text-primary transition-all duration-300 cursor-pointer hover:scale-125" />
            </div>
        </div>

        <!-- Images (cachées sur mobile, visibles md+) -->
        <div class="hidden lg:flex w-full lg:w-1/2 relative justify-center items-center">
            <!-- Image en bg -->
            <div class="absolute -z-30 w-full h-full">
                <img src="./../../assets/Group.svg" alt="Image" class="absolute -top-20 -right-20">
                <img src="./../../assets/Group_1.svg" alt="Image" class="absolute bottom-0 -right-20">
                <img src="./../../assets/Group_2.svg" alt="Image" class="absolute -top-20 -left-20">
            </div>
            <!-- Image overlay (plat en avant) -->
            <img 
                :src="DishImage" 
                alt="Signature dish" 
                loading="lazy" 
                decoding="async"
                class="absolute bottom-0 -left-8 lg:-left-12 h-32 md:h-40 lg:h-[40vh] bg-transparent z-50"
            >
            <!-- Image de fond (lieu) -->
            <img 
                :src="PlaceImage" 
                alt="Restaurant ambiance" 
                loading="lazy" 
                decoding="async" 
                class="h-48 md:h-64 lg:h-[80vh] w-auto rounded-tl-4xl rounded-br-4xl rounded-tr-3xl rounded-bl-3xl object-cover"
            >
        </div>

        <!-- Images mobiles (affichées uniquement sur mobile, version simplifiée) -->
        <div class="flex lg:hidden w-full justify-center mt-4 md:mt-6">
            <img 
                :src="PlaceImage" 
                alt="Restaurant ambiance" 
                loading="lazy" 
                decoding="async" 
                class="w-full max-w-sm h-auto rounded-tl-2xl rounded-br-2xl rounded-tr-xl rounded-bl-xl object-cover"
            >
        </div>
    </div>
 </section>
</template>

<script setup>
    import { Instagram, Facebook, Twitter } from 'lucide-vue-next';
    import PlaceImage from '/src/assets/pexels-volkan-vardar-3887985 1.jpg';
    import DishImage from '/src/assets/dish-2 1.png';
</script>