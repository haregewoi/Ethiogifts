<template>
    <div class="flex justify-center md:justify-end">
                  <RouterLink @click="toglesignup" v-if="visible" class="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition eas-out duration-500" to="/dashbord">{{ login }}</RouterLink>
                  <a @click="togleevents"  class="text-primary btn ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition eas-out duration-500" href="#">{{signup }}</a>
              </div>
</template>

<script>
export default{
    props:{
        visible:{
            type:Boolean,
            required:true,
        },
        login:{
            type:String
        },
        signup:{
            type:String
        }
    },
    data(){
        return {
            toglsignin:true,
            signinform:false,
            
        }
    },
    methods:{
    toglesignin(){
            this.toglsignin = !this.toglsignin
        },
        togleevents(){
            this.signinform =!this.signinform
            this.$emit('stogle',this.signinform)
        }
}
}
</script>