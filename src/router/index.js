import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import Dashbord from '../components/userdashbord/Dashbord.vue';



// {
//     path:'/main/:id',
//     name:'Mainbody',
//     component:Mainbody,
//     props:true
// },


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
             {
            path:'/home',
            name:'Home',
            component:Home,
        },
        {
            path:'/dashbord/:id',
            name:'Dashbord',
            component:Dashbord,
            props:true
        }
    ]

})


export default router