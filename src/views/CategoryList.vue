<template>


    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-4">Simple Blog</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item" v-for="category in categories" :key="category.id">

                <!-- <a :href="cat['id']" class="nav-link" aria-current="page">{{ cat['name'] }}</a> -->
                
                <RouterLink class="nav-link"  :to="`/categories/${category['id']}`">{{ category.name }}</RouterLink>

                </li>
            
            </ul>
            </header>

  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router'; // Import useRoute from vue-router
  
  const categories = ref([]);
  const route = useRoute(); // Get the current route
  
  onMounted(async () => {
    try {
      const response = await axios.get('https://basic-blog.teamrabbil.com/api/post-list/2');
      categories.value = response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  });
  </script>
  