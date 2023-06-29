<template>
    <main class="px-16 py-6 bg-gray-100 md:col-span-2">
              <LoginBotton @stogle="toglesignin" @ltogle="toglelogin" :visible="true" login="login" signup="signup"></LoginBotton>
              <signup v-if="signup" class="lg:w-2/3"></signup>
              <login v-if="signup" class="lg:w-2/3"></login>
              <header>
                  <h2 class="text-6xl text-gray-700 font-semibold">New Year</h2>
                  <h3 class="font-semibold text-2xl">For Family and Freinds</h3>
                  <div>
                      <h4 class="font-light pb-2 mt-12 border-b border-gray-200">Latest Gifts</h4>
                      <div  class="mt-8 grid lg:grid-cols-3 gap-10">
                        <div v-for="image in images" :key="image" class="card hover:shadow-lg">
                    <!-- post card component here -->
                  <PostCard :image="`http://localhost/ethiogift/storage/app/${image.image}`" :title="image.title" :body="image.user_id" />
                    </div>
                  </div>
                  <h4 class="font-light pb-2 mt-12 border-b border-gray-200">Most Popular Gifts</h4>
                  <div class="mt-8 grid lg:grid-cols-3 gap-10">
                  
                      <!-- card postcard component here -->
                      <!-- <PostCard image= title="Happy New Year - እንቁጣጣሽ" body="from Haregewoin"></PostCard> -->
                  </div>
  
                  <div class="flex mt-10 justify-center">
                      <div class="btn mt-10 bg-primary text-white hover:shadow-inner transform hover:scale-125 transition ease-put duration-300 hover:bg-opacity-50">Load more</div>
                  </div>


              
                  <div >

                    <p>{{  }}</p>

                  </div>
                  {{ subscriber.name }}
                  {{ subscriber.email }}
                  
                  </div>

                  
              </header>
          </main>
          <RouterView></RouterView>
</template>
<script>
import getSubscribers from './userdashbord/getSubscribers';
import getposts from './userdashbord/getposts'

import PostCard from './PostCard.vue';
import Login from './userdashbord/login.vue';
import signup from './userdashbord/signup.vue';
import LoginBotton from './userdashbord/LoginBotton.vue';
import { RouterLink,RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
export default{
    components:{
    PostCard,Login,LoginBotton,signup
},
props:['id'],

setup(props){
    const signup = ref(false);
    const login = ref(false);



    const {subscriber,error,load} = getSubscribers(props.id)
    const {images,errormessage,loadimage} = getposts()


    const toglesignin = (e)=>{
        signup.value = e
    }
    const toglelogin =(e)=>{
        login.value = e
    }


    load();
    loadimage();





    return {error, toglesignin,subscriber,images,errormessage,signup,login}

}



}


</script>

<style>

</style>