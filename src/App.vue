<template>
    <Header/>
    <main>
        <Hero/>
        <Dishes/>
        <Chef/>
        <Testimonials/>
        <NewsLetter/>
    </main>
    <Footer/>
</template>

 <script setup>
import Footer from './components/layouts/Footer.vue';
import Header from './components/layouts/Header.vue';
import Chef from './components/sections/Chef.vue';
import Dishes from './components/sections/Dishes.vue';
import Hero from './components/sections/Hero.vue';
import Testimonials from './components/sections/Testimonials.vue';
import NewsLetter from './components/layouts/NewsLetter.vue';

</script>
