<script lang="ts" setup>
// @ts-ignore
// import Footer from '@/components/HomeView/Footer.vue'
// @ts-ignore
// import Content from '@/components/HomeView/ContentHome.vue'
// @ts-ignore
// import Navigation from '@/components/HomeView/NavigationHome.vue'

const setVH = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVH);
setVH(); // Call the function initially

</script>

<template>
  <!-- <div class="common-layout">
    <el-container>
      <el-header class='header'>
        <Navigation />

      </el-header>

      <el-main class='main'>
        <Content />
      </el-main>

      <el-footer class='footer'>
        <Footer />
      </el-footer>
    </el-container>
  </div> -->
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Startup Homepage</title>
    <!-- Include Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

  <nav class="flex justify-between items-center p-6 bg-gray-800 text-white">
    <div>
        <span class="text-xl font-semibold">Supermarket Sales CMS</span>
    </div>
    <ul class="flex space-x-4">
        <li><a href="/data/supermarket" class="hover:text-gray-300">Home</a></li>
        <li><a href="#" class="hover:text-gray-300">About</a></li>
        <li><a href="#" class="hover:text-gray-300">Contact</a></li>
    </ul>
</nav>

<main class="container mx-auto mt-10 px-6">
    <section>
        <h2 class="text-4xl font-bold text-center">Welcome to Our Startup</h2>
        <p class="text-center text-gray-600 mt-4">Innovative solutions for modern problems.</p>
        <div class="mt-8">
            <img src="https://source.unsplash.com/random/800x600" alt="Innovative Startup" class="w-full h-auto rounded-lg shadow-lg">
        </div>
    </section>

    <section class="my-16">
        <h3 class="text-3xl font-bold">Our Services</h3>
        <p class="text-gray-600 mt-4">From technology to consulting, our diverse range of services ensures that we have something for everyone.</p>
    </section>

    <section class="mb-16">
        <h3 class="text-3xl font-bold">Why Choose Us?</h3>
        <p class="text-gray-600 mt-4">Our commitment to quality and customer satisfaction sets us apart in the world of startups.</p>
    </section>

    <section class="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold">Stay Updated!</h2>
        <p class="text-gray-600 mt-2">Subscribe to our newsletter</p>
        <form class="mt-4">
            <input type="text" placeholder="Your Name" class="px-4 py-2 border border-gray-300 rounded-lg mr-2">
            <input type="email" placeholder="Your Email" class="px-4 py-2 border border-gray-300 rounded-lg mr-2">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Subscribe</button>
        </form>
    </section>
</main>

<footer class="bg-gray-800 text-white text-center p-4 mt-16">
    <p>&copy; 2024 Startup Name. All rights reserved.</p>
</footer>
</template>

<style scoped lang="scss">
.header {
  height: 10vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0px;
  padding: 0px;
}

.main {
  height: 80vh;
  /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 80);

  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;
}</style>
