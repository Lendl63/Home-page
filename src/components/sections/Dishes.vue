<template>
<section id="dishes" class="w-screen flex flex-col justify-center items-center mx-auto bg-gray">
    <!-- Section Titre et Grille de plats -->
    <div class="flex flex-col items-center max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 gap-8 md:gap-10 lg:gap-14">
        <div class="flex flex-col items-center gap-3 md:gap-4 lg:gap-6 w-full">
            <h2 class="text-3xl md:text-4xl lg:text-5xl text-black font-bold text-center">Our Special Dishes</h2>
            <p class="text-sm md:text-base lg:text-lg text-center text-gray-700 max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur<br class="hidden md:block"/>adipiscing elit, sed do eiusmod tempor incididunt
            </p>
        </div>

        <!-- Grille de plats (Mobile-First) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-24 md:gap-y-28 gap-6 w-full p-4 md:p-6 lg:p-8 mt-8 sm:mt-12 lg:mt-16">
            <div 
                v-for="dish in dishes" 
                :key="dish.id"
                class="relative flex flex-col items-center gap-2 md:gap-3 px-3 md:px-4 pb-6 md:pb-8 lg:pb-10 pt-24 md:pt-32 lg:pt-44 border-4 border-white bg-white/20 hover:bg-white duration-300 ease-in rounded-tl-4xl rounded-br-4xl rounded-tr-lg rounded-bl-lg transition-colors"
            >
                <div class="absolute -top-20 md:-top-24 lg:-top-26 h-fit">
                    <img :src="dish.image" :alt="dish.name" loading="lazy" class="w-32 md:w-44 lg:w-60 h-32 md:h-44 lg:h-60 object-cover">
                    <p class="bg-black rounded-full w-fit p-2 md:p-3 lg:p-4 absolute top-8 md:top-10 lg:top-12 -right-1 md:-right-2">
                        <span class="text-xs md:text-sm lg:text-lg text-white font-bold">{{ dish.price }}</span>
                    </p>
                </div>
                <h4 class="text-lg md:text-xl lg:text-2xl font-bold text-black text-center leading-tight">{{ dish.name }}</h4>
                <p class="text-xs md:text-sm lg:text-base text-center text-gray-700">{{ dish.description }}</p>
            </div>
        </div>
    </div>

    <!-- Section Restaurant Welcome -->
    <div class="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-16 px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <!-- Image avec décoration (responsive positioning) -->
        <div class="w-full lg:w-1/2 flex justify-center relative">
            <div class="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
                <img 
                    :src="DishImage" 
                    alt="Welcome Dish" 
                    loading="lazy" 
                    class="w-full h-auto"
                >
                <!-- Feuilles décoratives (cachées sur mobile, visibles md+) -->
                <img 
                    :src="LeafImage1" 
                    alt="Leaf decoration" 
                    loading="lazy" 
                    class="hidden md:block absolute top-12 md:top-16 lg:top-20 left-0 w-12 md:w-16 lg:w-20 h-auto"
                >
                <img 
                    :src="LeafImage2" 
                    alt="Leaf decoration" 
                    loading="lazy" 
                    class="hidden md:block absolute bottom-0 md:bottom-4 lg:bottom-8 right-0 md:right-12 lg:right-20 w-12 md:w-16 lg:w-20 h-auto"
                >
                <img 
                    :src="LeafImage3" 
                    alt="Leaf decoration" 
                    loading="lazy" 
                    class="hidden md:block absolute top-12 md:top-16 lg:top-20 -right-2 md:-right-4 lg:-right-8 w-12 md:w-16 lg:w-20 h-auto"
                >
            </div>
        </div>

        <!-- Texte et boutons -->
        <div class="w-full lg:w-1/2 flex flex-col items-start gap-4 md:gap-5 lg:gap-6 p-4 md:p-6 lg:p-8">
            <h2 class="text-3xl md:text-4xl lg:text-5xl text-black font-bold leading-tight">
                Welcome to Our<br class="hidden sm:block" />Restaurant
            </h2>
            <p class="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur<br class="hidden md:block" /> elit, sed do eiusmod tempor incididunt<br class="hidden md:block" /> labore et dolore magna aliqua.
            </p>
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 w-full sm:w-auto">
                <button class="rounded-btn text-white bg-black text-sm md:text-base px-6 md:px-8 py-2 md:py-3 hover:bg-gray-800 transition-colors">
                    Menu
                </button>
                <button class="rounded-btn text-white bg-primary text-sm md:text-base px-6 md:px-8 py-2 md:py-3 hover:opacity-90 transition-opacity">
                    Book to table
                </button>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
    import { dishes } from '../../data/dishes';
    import DishImage from '/src/assets/dish-2 1.jpg';
    import LeafImage1 from '/src/assets/leaf-1.jpg';
    import LeafImage2 from '/src/assets/leaf-2.jpg';
    import LeafImage3 from '/src/assets/leaf-3.jpg';
</script>