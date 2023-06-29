<template>
    <div class="card hover:shadow-lg mt-10 lg:m-14">
      <form @submit.prevent="submithandler">
        <div class="m-4">
          <label class="inputlabels" for="">Title </label>
          <input v-model="title" class="inputfilds m-2" placeholder="Add gift title here" type="text">
          <label class="inputlabels" for="">Upload gift card</label>
          <input @change="imageupload" class="block m-2 inputfilds" type="file">
          {{ success }}
          <button class="btn w-1/2 sm:w-1/3 lg:w-1/4 mt-10 bg-primary text-white">Send Gift</button>
        </div>
      </form>
    </div>

     
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props:['id'],
    data() {
      return {
          title: '',
          image: null,
        success: '',
        errorReport: '',
      }
    },
    methods: {
      imageupload(event) {
        this.image = event.target.files[0];
      },
      submithandler() {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('image', this.image);
        formData.append('user_id', this.id);
        axios.post('http://127.0.0.1:8000/api/all-posts', formData)
          .then(response => this.success = response.data)
          .catch(error => console.log(error));

      },
    },
  }
  </script>