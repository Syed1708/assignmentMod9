<script setup>
import {RouterLink} from "vue-router"
import axios from 'axios'
import {ref} from 'vue'


const PostList =ref(null)

import {useRoute, useRouter, RouterView} from "vue-router"

const route = useRoute()

const router = useRouter(); // Get the router instance
// // using vue virtual DOM

GetPostList();
async function GetPostList(){
  //we can show a loader here untill all data load
  // try and catch 
  // here we can  lot's  api call in try blok but one catch

  try{

    // post API call
    // let url = "https://basic-blog.teamrabbil.com/api/post-list/2";
    let url = "https://basic-blog.teamrabbil.com/api/post-newest";
    let res = await axios.get(url)
    if(res.status ===200){
    
     PostList.value= res.data;
    }




    // we can call multipale API call here


  }catch(e){
    //
    alert(e);
  }

}



</script>
<template>
    
<!-- <pre>{{ PostList }}</pre>  -->
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  
   
   
  <div class="col" v-for="post in PostList" :key="post.id">
      <div class="card shadow-sm">
        <img :src="post['img']" :alt="post['title']">
        <div class="card-body">
          <!-- <h2><a href="">{{ post['title'] }}</a> </h2> -->
          <h2>
            <RouterLink :to="`/post-details/${post.id}`">
            {{ post['title'] }}
            </RouterLink>  
          </h2>
         
          <p class="card-text">{{ post['short'] }}</p>

        </div>
      </div>
  </div>


</div>
</template>