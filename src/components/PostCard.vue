<template>
    
        <img @click="displayimage" :src="image" ref="images" class="w-full  h-32 sm:h-48 object-cover" alt=""/>
        <div class="m-4">
            <span class="font-bold">{{ title }}</span>
            <span class="block text-gray-500 text-sm">{{ subscriber.name}}</span>
        </div>
   
</template>
<script>

import zoomoutimage from '../components/zoomoutimage.vue'
import { ref } from 'vue';
import getSubscribers from './userdashbord/getSubscribers';
export default {
    components:{zoomoutimage},
    props: ['title', 'body','image'],
    setup(props){

        const images=ref(null);


        const {error, subscriber,load} = getSubscribers(props.body);
console.log(props.body)
        load()    
        
       const displayimage = ()=>{
        console.log('done')
        }

       return {error, subscriber,displayimage,images}
        
    }
}
</script>

<style>
</style>

