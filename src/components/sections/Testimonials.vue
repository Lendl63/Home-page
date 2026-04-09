<template>
  <section class="py-20 bg-white relative overflow-hidden">
    <!-- Décoration de fond légère (comme sur le template) -->
    <div class="absolute left-8 top-1/3 opacity-10 pointer-events-none text-[380px] leading-none select-none">
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Titre de la section -->
      <div class="text-center mb-16">
        <h2 class="text-5xl text-black font-bold p-2 mb-5">
          Our Happy Customers
        </h2>
        <p class="p-2 text-center">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor incididunt </p>
      </div>

      <!-- Grille des témoignages -->
      <div class="grid grid-cols-1 mt-32 md:grid-cols-3 gap-10 lg:gap-12">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white rounded-tl-4xl rounded-br-4xl rounded-tr-lg rounded-bl-lg shadow-2xl p-8 pt-16 text-center relative border border-gray-100"
        >
          <div class="absolute -top-14 left-1/2 -translate-x-1/2">
            <img
              :src="testimonial.image"
              :alt="testimonial.name"
              class="w-28 h-28 rounded-full object-cover shadow-lg ring-8 ring-white"
            />
          </div>

          <!-- Étoiles -->
          <div class="flex justify-center gap-1 text-4xl text-amber-400 mb-8">
            ★★★★★
          </div>

          <!-- Citation -->
          <p class="italic mb-10 min-h-35">
            "{{ testimonial.quote }}"
          </p>

          <!-- Nom + ville -->
          <div>
            <p class="font-semibold text-xl text-black">{{ testimonial.name }}</p>
            <p class="text-sm text-black/50">{{ testimonial.location }}</p>
          </div>
        </div>
      </div>

      <!-- Petits points de navigation (comme sur le template) -->
      <div class="flex justify-center gap-2 mt-12">
        <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
        <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    name: "Marie K.",
    location: "Bafoussam, Cameroun",
    quote: "La meilleure nourriture que j'ai jamais goûtée ! Le service est impeccable et l'ambiance chaleureuse. Je reviens chaque semaine avec ma famille.",
    image: "/src/assets/person-1 (1).jpg"
  },
  {
    id: 2,
    name: "Jean-Paul M.",
    location: "Douala, Cameroun",
    quote: "Un vrai délice ! Les plats sont copieux, frais et savoureux. Le chef est un artiste. Merci pour cette excellente expérience.",
    image: "/src/assets/person-1.jpg"
  },
  {
    id: 2,
    name: "Jean-Paul M.",
    location: "Douala, Cameroun",
    quote: "Un vrai délice ! Les plats sont copieux, frais et savoureux. Le chef est un artiste. Merci pour cette excellente expérience.",
    image: "/src/assets/person-1 (1).jpg"
  }
]
</script>

<style scoped>
</style>