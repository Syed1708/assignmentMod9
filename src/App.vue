<script setup>
import axios from 'axios'
import {ref} from 'vue'
import {RouterView} from "vue-router"
import Header from './components/Header.vue'
// import CategoryList from './views/CategoryList.vue';

const PostCat =ref(null)



// // using vue virtual DOM

GetCatList();
async function GetCatList(){
  //we can show a loader here untill all data load
  // try and catch 
  // here we can  lot's  api call in try blok but one catch

  try{

    // post API call
    // let url = "https://basic-blog.teamrabbil.com/api/post-list/2";
    // let res = await axios.get(url)
    // if(res.status ===200){
    
    //  PostList.value= res.data;
    // }

    // category API call
    let url2 = "https://basic-blog.teamrabbil.com/api/post-categories";
    let res2 = await axios.get(url2)
    if(res2.status ===200){
    
      PostCat.value= res2.data;
    }


    // we can call multipale API call here


  }catch(e){
    //
    alert(e);
  }

}







</script>

<template>

<div class="container">



  <Header :PostCat="PostCat" />
  <!-- <CategoryList/> -->

  <RouterView/>






</div>
</template>

<style scoped>

</style>
