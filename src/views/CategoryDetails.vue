  
  <script setup>
  import axios from 'axios'
  import {ref, computed} from 'vue';

  import {useRoute, useRouter, RouterView} from "vue-router"
  
  const PostList =ref(null)

GetPostList();
async function GetPostList(){

  try{

    // post API call
    let url = "https://basic-blog.teamrabbil.com/api/post-list/2";
    let res = await axios.get(url)
    if(res.status ===200){
    
     PostList.value= res.data;
    }
  
}
catch(e){
    //
    alert(e);
  }

}

  const route = useRoute()

  const router = useRouter(); // Get the router instance

  const categoryId = computed(() => router.params.id); // Get the category ID from the route parameter
  
  
  </script>

<template>
    <div>
      <h2>Category Details Page</h2>
      <p>Category ID: {{ categoryId }}</p>
    </div>
  </template>
