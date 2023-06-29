import { ref } from "vue";


const getposts =  () => {
const errormessage = ref(null);
const images = ref([]);


const loadimage = async () => {
    try{
   let response = await fetch('http://127.0.0.1:8000/api/all-posts');

   

      images.value = await response.json();

    }catch(err){
        errormessage.value = err.message;
    }

}


return {errormessage, images,loadimage}

}


export default getposts;