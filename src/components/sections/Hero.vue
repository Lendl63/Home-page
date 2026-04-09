<template>
 <section id="hero" class="flex items-center justify-around px-9 my-24">
    <div class="flex flex-col p-3 gap-8">
        <h1 class="text-6xl font-bold text-black mb-4">We provide the<br/> best food for your</h1>
        <div class="flex flex-col items-start gap-4">
            <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.</p>
            <div class="flex items-center p-3 gap-6">
                <button class="rounded-btn text-white bg-black text-lg px-8 py-3">Menu</button>
                <button class="rounded-btn text-white bg-primary text-lg px-8 py-3">Book to table</button>
            </div>
        </div>
        <div class="flex items-center p-6 gap-5">
            <Instagram class="w-7 h-7 md:w-8 md:h-8 hover:text-primary transition-all duration-400 cursor-pointer" />
            <Facebook class="w-7 h-7 md:w-8 md:h-8 hover:text-primary  transition-all duration-400 cursor-pointer" />
            <Twitter class="w-7 h-7 md:w-8 md:h-8 hover:text-primary  transition-all duration-400 cursor-pointer" />
        </div>
    </div>
    <div class="flex relative">
        <img 
            :src="DishImage" 
            alt="DishImage" 
            loading="lazy" 
            decoding="async"
            class="absolute h-[40vh] bottom-0 -left-50 bg-transparent z-50"
        >
        <img 
            :src="PlaceImage" 
            alt="PlaceImage" 
            loading="lazy" 
            decoding="async" 
            class="h-[80vh] rounded-tl-4xl rounded-br-4xl rounded-tr-3xl rounded-bl-3xl"
        >
    </div>
 </section>
</template>

<script setup>
    import { Instagram, Facebook, Twitter } from 'lucide-vue-next';
    import PlaceImage from '/src/assets/pexels-volkan-vardar-3887985 1.jpg';
    import DishImage from '/src/assets/dish-2 1.jpg';
</script>