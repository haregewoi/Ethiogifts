import { ref } from "vue";


const getSubscribers =  (id) => {
const error = ref(null);
const subscriber = ref([]);


const load = async () => {
    try{
   let response = await fetch('http://127.0.0.1:8000/api/all-subsicriber/' +id);

   

      subscriber.value = await response.json();

    }catch(err){
        error.value = err.message;
    }

}


return {error, subscriber,load}

}


export default getSubscribers;