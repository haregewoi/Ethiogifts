<template>
    <div class="card hover:shadow-lg mt-10 lg:m-14">
                <form @submit.prevent="userhandler" >
                    <div class="m-4 ">
                    <label class="inputlabels" for=""> email</label>
                    <input class="inputfilds m-2" placeholder="write your email here" v-model="formData.email" type="email">
                    <label class="inputlabels" for="">password</label>
                    <input class="inputfilds m-2"  v-model="formData.password" type="password">
                    <button class="btn w-1/2 sm:w-1/3 lg:w-1/4   mt-10 bg-primary text-white">Send Gift </button>
                </div>
                </form>
            </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            formData:{
            email:'',
            password:'',
            },
            success:''
        }
    },

}
</script>