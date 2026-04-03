<template>
    <footer class="flex flex-col items-start px-12">
        <div class="grid grid-flow-col auto-cols-auto w-full">
            <div class="flex flex-col items-start gap-3 p-3">
                <div class="flex items-center gap-1">
                    <Logo/>
                    <h2 class="text-2xl font-bold p-2 mt-4">restaurant</h2>
                </div>
                <p class="">Lorem ipsum dolor sit amet, consectetur sed do<br/> eiusmod tempor incididunt labore et dolore<br/> magna aliqua.</p>
            </div>
            <div class="flex flex-col items-start gap-3 p-3 mt-4">
                <h3>NAVIGATION</h3>
                <nav class="flex flex-col items-start gap-3 text-lg text-black">
                    <a href="">Menu</a>
                    <a href="">About us</a>
                    <a href="">Contact us</a>
                    <a href="">Main dishes</a>
                </nav>
            </div>
            <div class="flex flex-col items-start gap-3 p-3 mt-4">
                <h3>DISHES</h3>
                <nav class="flex flex-col items-start gap-3 text-lg text-black">
                    <a>Fish & Veggie</a>
                    <a>Tofu Chili</a>
                    <a>Lumpia with Suace</a>
                    <a>Egg & Cocumber</a>
                </nav>
            </div>
            <div class="flex flex-col items-start gap-3 p-3 mt-4">
                <h3>FOLLOW US</h3>
                <div class="flex items-center  gap-5">
                    <InstaLogo class="h-10 w-10" />
                    <FacebookLogo/>
                    <TwitterLogo/>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-start p-3 gap-5 w-full pb-15 border-b">
            <h3 class="mb-2">OPENING HOURS</h3>
            <div class="flex items-start gap-11">
                <div><p>Monday - Friday</p><p>8:00 am to 9:00 pm</p></div>
                <div><p>Saturday</p><p>8:00 am to 9:00 pm</p></div>
                <div><p>Sunday</p><p>CLOSED</p></div>
            </div>
        </div>
        <div class="flex items-center justify-between w-full p-3 mt-8 mb-32">
            <p>&copy; 2022 Restaurants. All Right Reserved. Designed by <span class="font-bold">Isaac</span></p>
            <div class="flex items-center gap-7"><p>Terms of Service</p><p>Privacy Policy</p></div>
        </div>
    </footer>
</template>

<script setup>
    import Logo from '/src/assets/Group 13.svg?component'
    import InstaLogo from '/src/assets/icons8-instagram 1.svg?component'
    import FacebookLogo from '/src/assets/image 1.svg?component'
    import TwitterLogo from '/src/assets/image 2.svg?component'

</script>