<template>
    <section id="chef" class="flex items-center justify-center gap-7 w-screen">
        <div class="flex items-start p-4 my-6 gap-19">
            <div class="flex flex-col items-start p-4 m-8 mt-32">
                <h2 class="text-5xl text-black font-bold p-2 mb-5">Our Expects Chef</h2>
                <p class="p-2">Lorem ipsum dolor sit amet, consectetur<br/> elit, sed do eiusmod tempor incididunt<br/> labore et dolore magna aliqua.</p>
                <div class="flex items-center p-2 mt-3 gap-6">
                    <button class="rounded-btn text-white bg-black text-lg px-8 py-3">Menu</button>
                    <button class="rounded-btn text-white bg-primary text-lg px-8 py-3">Book to table</button>
                </div>
            </div>
            <img :src="ChefImage" alt="Dish" loading="lazy" class="w-120 m-9">
        </div>
    </section>
</template>

<script setup>
    import ChefImage from '/src/assets/chef 1.jpg';
</script>