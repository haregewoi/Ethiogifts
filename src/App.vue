<template>
  <div  class="bg-gray-100 text-colorbackground font-body">
      <div class="grid md:grid-cols-3">
          <div class="md:col-span-1">
              <nav class="text-right">
                  <div class="flex justify-between bg-enqutatash items-center">
                      <h1 class="font-bold p-4 border-b  border-gray-200 hover:text-gray-700 uppercase">
                          <a class="text-white font-2xl " href="#">Ethio Gifts</a>
                      </h1>
                      <div class="px-4 cursor-pointer md:hidden" @click="toglenavbar" id="menu" >
                          <svg  class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                                                    
                      </div>
                  </div>
                  <ul  ref="one"  class="text-sm mt-6 hidden  md:block" id="menuList">
                      <li class="text-gray-700 font-bold  " >
                          <RouterLink  class="px-4 flex justify-end text-primary border-r-4 border-primary" to="/home">
                              <span>New Year</span>                                
                          </RouterLink>
                      </li>
                      <li>
                          <RouterLink class="px-4 flex justify-end hover:text-primary border-r-4 border-white" to="/main">
                              <span class="text-one ">Estear Gifts</span>                       
                          </RouterLink>
                      </li>
                      <li>
                          <RouterLink class="px-4 flex justify-end hover:text-primary border-r-4 border-white" to="/main">
                              <span>History Gifts</span>                           
                          </RouterLink>
                      </li>
  
                      <li>
                          <div class="px-4 flex justify-end mt-5 border-r-4 border-white" >
                              <input class="btn rounded-lg   border-2 border-primary text-xl text-primary w-2/3 pl-2 p-0 " type="text"> 
                              <button class="ml-2 btn border-primary text-primary border-2 hover:bg-primary hover:text-white transition ease-out duration-500">search</button>                             
                          </div>
                      </li>
                  </ul>
              </nav>

          </div>
    

          <RouterView></RouterView>

        </div>
  </div>
  </template>

  <script>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
export default{

    setup(){
        const toglenave = true;
        const toglsignin = false;
        const user =[''];
        const one = ref(null)

        const toglenavbar = ()=>{
            if(!one.value.classList.contains('hidden')){
            one.value.classList.add('hidden');
            }else{
                one.value.classList.remove('hidden')
            }
        }

        return {toglenavbar,toglenave,toglsignin,one}

    }
    
}
</script>
  
  <style></style>
  
  