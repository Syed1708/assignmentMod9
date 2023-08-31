// Define our routing rules
import Homepage from '../views/Homepage.vue'
// import Aboutpage from '../views/Aboutpage.vue'
// import CarView from '../views/CarView.vue'
// import ContactView from '../views/ContactView.vue'
// import CategoryList from '../views/CategoryList.vue';
import PostDetails from '../views/PostDetails.vue';

import {createRouter, createWebHistory} from 'vue-router'

const router  =  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path : "/",
            name: "Home",
            component: Homepage
        },

        // {
        //     path : "/categories",
        //     name: "Categories List",
        //     component: CategoryList
        // },
        {
            path : "/post-details/:id",
            name: "post details",
            component: PostDetails,
            // children: [
            //     {
            //     path: "contact",
            //     name: "Contact",
            //     component: ContactView
            //     }
            // ]
        }


    ]
})

export default router