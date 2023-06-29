<template>
    <main class="px-16 py-6 bg-gray-100 md:col-span-2">
               <LoginBotton @stogle="toglepost" :visible="false" login="login" signup="post"></LoginBotton>
              <PostImageVue :id="id" v-if="newpost" class="lg:w-2/3"></PostImageVue>
             
              <header>
                <h2 class="text-3xl text-colorbackground font-semibold">My gifts</h2>
                <h3 class="font-semibold text-xl">Compute with others by posting high quality</h3>
                <div>
                    <h4 class="font-light pb-2 mt-12 border-b border-gray-200">your posts</h4>
                    <div class="mt-8 grid lg:grid-cols-3 gap-10">      
                    <!-- post card component here -->
                    <div v-for="image in images" :key="image" class="card hover:shadow-lg">
                    <!-- post card component here -->
                  <PostCard :image="`http://localhost/ethiogift/storage/app/${image.image}`" :title="image.title" :body="image.user_id" />
                    </div> 
                  </div>
  
                  <div class="flex mt-10 justify-center">
                      <div class="btn mt-10 bg-primary text-white hover:shadow-inner transform hover:scale-125 transition ease-put duration-300 hover:bg-opacity-50">Load more</div>
                  </div>
                  </div>
              </header>
          </main>
</template>

<script>
import PostImageVue from './PostImage.vue';
import PostCard from '../PostCard.vue';
import LoginBotton from './LoginBotton.vue';
import userpost from './userpost';
import { ref } from 'vue';

export default{
    components:{
        PostImageVue,PostCard,LoginBotton,
    },
props:['id'],
    setup(props){
const newpost = ref(false)

const {images,errormessage,loadimage} = userpost(props.id)

const toglepost=(e)=>{
        newpost.value = e
    };

    loadimage()
    return{newpost, toglepost,images,errormessage}
    }

}
</script>