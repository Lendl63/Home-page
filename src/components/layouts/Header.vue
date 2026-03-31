<template>
    <header class="flex items-center justify-around p-4">
        <div class="flex items-center gap-1">
            <Logo/>
            <h2 class="text-2xl font-bold p-2 mt-4">restaurant</h2>
        </div>
        <nav class="flex items-center gap-8 mt-4 text-lg">
            <a href="">Menu</a>
            <a href="">Events</a>
            <a href="">Gallery</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </nav>
        <button class="text-lg text-white font-bold p-4 mt-4 bg-primary rounded-btn shadow-2xl">Book a table</button>
    </header>

</template>

<script setup>
    import Logo from '/src/assets/Group 13.svg?component'

</script>