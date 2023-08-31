
  
  <script setup>
  import axios from 'axios'
  import {ref, computed, onMounted} from 'vue';

  import {useRoute, useRouter, RouterView} from "vue-router"
  
  let PostList =ref([])
  const route = useRoute()

  const router = useRouter(); // Get the router instance
  const postId = parseInt(route.params.id)

//   const categoryId = computed(() => router.params.id); // Get the category ID from the route paramete

 
// GetPostList(postId);
// async function GetPostList(postId){

//   try{

//     // alert(postId)
//     const postId = parseInt(route.params.id)
//     // post API call
//     let url = "`https://basic-blog.teamrabbil.com/api/post-details/53`" ;
//     let res = await axios.get(url)
//     {{ res }}
//     if(res.status ===200){
    
//      PostList.value= res.data;
//     }
  
// }
// catch(e){
//     //
//     alert(e);
//   }

// }
onMounted(async () => {
    try {
        const postId = parseInt(route.params.id)

       // alert(postId)
      let  url ='https://basic-blog.teamrabbil.com/api/post-details/' + postId
      const response = await axios.get(url);
    //  {{ response.data }}
    if(response.status ===200){
    //   PostList.value.push(response.data);
      PostList.value = response.data;

        return PostList
    }

    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  });

  
  
  </script>

<template>
    <div class="row">
        <div class="col-md-12">
            <h2>Post Details</h2>
            <p>post ID: {{ postId }}</p>
            <pre>{{ PostList }}</pre>
            <div v-if=" PostList.data" post-details>

                <h2>{{ PostList[0]['postDetails']['list_id'] }}</h2>
                <h2>{{ PostList[0]['postDetails']['title'] }}</h2>
   
            </div>

        </div>

    </div>
  </template>

<style scoped>




</style>
