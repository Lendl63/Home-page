<template>
    <footer class="w-full bg-white">
        <!-- Conteneur principal avec max-width -->
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 mt-40">
            
            <!-- Section 1: Grille des colonnes footer - Mobile-First -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12 lg:mb-16">
                
                <!-- Colonne 1: Branding & Description -->
                <div class="flex flex-col items-start gap-3 md:gap-4">
                    <div class="flex items-center gap-1 md:gap-2">
                        <Logo class="w-8 h-8 md:w-10 md:h-10" />
                        <h2 class="text-lg md:text-xl lg:text-2xl font-bold">restaurant</h2>
                    </div>
                    <p class="text-sm md:text-base text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt labore et dolore magna aliqua.
                    </p>
                </div>

                <!-- Colonne 2: Navigation -->
                <div class="flex flex-col items-start gap-3 md:gap-4">
                    <h3 class="text-base md:text-lg font-bold uppercase tracking-wider">Navigation</h3>
                    <nav class="flex flex-col items-start gap-2 md:gap-3 text-sm md:text-base">
                        <a href="#menu" class="hover:text-primary transition-colors duration-200">Menu</a>
                        <a href="#about" class="hover:text-primary transition-colors duration-200">About us</a>
                        <a href="#contact" class="hover:text-primary transition-colors duration-200">Contact us</a>
                        <a href="#dishes" class="hover:text-primary transition-colors duration-200">Main dishes</a>
                    </nav>
                </div>

                <!-- Colonne 3: Dishes -->
                <div class="flex flex-col items-start gap-3 md:gap-4">
                    <h3 class="text-base md:text-lg font-bold uppercase tracking-wider">Dishes</h3>
                    <nav class="flex flex-col items-start gap-2 md:gap-3 text-sm md:text-base">
                        <a href="#fish" class="hover:text-primary transition-colors duration-200">Fish & Veggie</a>
                        <a href="#tofu" class="hover:text-primary transition-colors duration-200">Tofu Chili</a>
                        <a href="#lumpia" class="hover:text-primary transition-colors duration-200">Lumpia with Sauce</a>
                        <a href="#egg" class="hover:text-primary transition-colors duration-200">Egg & Cucumber</a>
                    </nav>
                </div>

                <!-- Colonne 4: Follow Us -->
                <div class="flex flex-col items-start gap-3 md:gap-4">
                    <h3 class="text-base md:text-lg font-bold uppercase tracking-wider">Follow Us</h3>
                    <div class="flex items-center gap-4 md:gap-5">
                        <Instagram class="w-7 h-7 md:w-8 md:h-8 hover:text-primary transition-all duration-400 cursor-pointer" />
                        <Facebook class="w-7 h-7 md:w-8 md:h-8 hover:text-primary  transition-all duration-400 cursor-pointer" />
                        <Twitter class="w-7 h-7 md:w-8 md:h-8 hover:text-primary  transition-all duration-400 cursor-pointer" />
                    </div>
                </div>
            </div>

            <!-- Section 2: Opening Hours - Responsive Layout -->
            <div class="flex flex-col items-start gap-4 md:gap-5 py-8 md:py-10 lg:py-12 pb-8 md:pb-10 lg:pb-12 border-b border-gray-200">
                <h3 class="text-base md:text-lg font-bold uppercase tracking-wider">Opening Hours</h3>
                
                <!-- Horaires: Stack vertical en mobile, grille en desktop -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    <div class="flex flex-col">
                        <p class="font-semibold text-sm md:text-base">Monday - Friday</p>
                        <p class="text-sm md:text-base text-gray-700">8:00 am to 9:00 pm</p>
                    </div>
                    <div class="flex flex-col">
                        <p class="font-semibold text-sm md:text-base">Saturday</p>
                        <p class="text-sm md:text-base text-gray-700">8:00 am to 9:00 pm</p>
                    </div>
                    <div class="flex flex-col">
                        <p class="font-semibold text-sm md:text-base">Sunday</p>
                        <p class="text-sm md:text-base font-bold text-primary">CLOSED</p>
                    </div>
                </div>
            </div>

            <!-- Section 3: Copyright & Links - Responsive -->
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mt-8 md:mt-10 lg:mt-12 pt-8 md:pt-10">
                <!-- Copyright text -->
                <p class="text-xs md:text-sm text-gray-700 order-2 md:order-1">
                    &copy; 2022 Restaurants. All Right Reserved. Designed by <span class="font-bold">Isaac</span>
                </p>
                
                <!-- Footer Links -->
                <div class="flex items-center gap-4 md:gap-6 text-xs md:text-sm order-1 md:order-2">
                    <a href="#terms" class="hover:text-primary transition-colors duration-200">Terms of Service</a>
                    <span class="text-gray-300">•</span>
                    <a href="#privacy" class="hover:text-primary transition-colors duration-200">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import Logo from '/src/assets/Group 13.svg?component';
    import { Instagram, Facebook, Twitter } from 'lucide-vue-next';

</script>