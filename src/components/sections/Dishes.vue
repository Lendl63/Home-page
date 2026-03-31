<template>
<section id="dishes" class="flex flex-col items-center px-8 py-11 gap-6 bg-gray">
    <h2 class="text-5xl text-black font-bold p-2">Our Special Dishes</h2>
    <p class="p-2 text-center">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor incididunt </p>
    <div class="grid grid-cols-4 gap-6 p-6 pt-8 mt-24 mx-10">
        <div 
            v-for="dish in dishes" 
            class="relative flex flex-col items-center mx-2 gap-3 px-4 pt-44 pb-10 border-4 border-white bg-white/20 hover:bg-white duration-300 ease-in rounded-tl-4xl rounded-br-4xl rounded-tr-lg rounded-bl-lg"
        >
            <div class="absolute -top-26 h-fit">
                <img :src="dish.image" :alt="dish.name" loading="lazy" class="w-60 h-60">
                <p class="bg-black rounded-full w-fit p-4 absolute top-12 -right-2"><span class="text-lg text-white font-bold">{{ dish.price }}</span></p>
            </div>
            <h4 class="text-2xl font-bold text-black">{{ dish.name }}</h4>
            <p class="text-center p-2">{{ dish.description }}</p>
        </div>
    </div>
</section>
</template>

<script setup>
    import { dishes } from '../../data/dishes';
</script>