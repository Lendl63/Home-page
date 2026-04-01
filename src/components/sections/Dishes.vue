<template>
<section id="dishes" class="flex flex-col items-center px-8 py-11 gap-14 bg-gray w-screen">
    <div class="flex flex-col items-center gap-6">
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
    </div>
    <div class="flex items-center gap-7">
        <div class="m-9 relative">
            <img :src="DishImage" alt="Dish" loading="lazy" class="w-150 h-150">
            <img :src="LeafImage1" alt="Dish" loading="lazy" class="absolute top-36 left-0 w-20">
            <img :src="LeafImage2" alt="Dish" loading="lazy" class="absolute bottom-0 right-36 h-20">
            <img :src="LeafImage3" alt="Dish" loading="lazy" class="absolute top-32 -right-9 h-20">
        </div>
        <div class="flex flex-col items-start p-4 m-8">
            <h2 class="text-5xl text-black font-bold p-2 mb-5">Welcome to Our<br/>Restaurant</h2>
            <p class="p-2">Lorem ipsum dolor sit amet, consectetur<br/> elit, sed do eiusmod tempor incididunt<br/> labore et dolore magna aliqua.</p>
            <div class="flex items-center p-2 mt-3 gap-6">
                <button class="rounded-btn text-white bg-black text-lg px-8 py-3">Menu</button>
                <button class="rounded-btn text-white bg-primary text-lg px-8 py-3">Book to table</button>
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