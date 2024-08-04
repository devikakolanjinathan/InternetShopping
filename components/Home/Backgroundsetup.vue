<template>
  <div id="imagebackground">
    <!-- <div class="container">
        <nuxt-link to ="/productlist" class="hero-login-link btn btn-primary">Explore More Product</nuxt-link>
        <nuxt-link to ="/addproduct" class="hero-login-link btn btn-primary">Add The Product</nuxt-link>
    </div> -->
    <ul class="navbar-nav ml-auto urlcontainer">
                    <li class="mr-6 nav-item active">
                      <nuxt-link to ="/productlist" class="hero-login-link btn btn-primary">Explore More Product</nuxt-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'order'}">Re-Stock</router-link>                        
                    </li> -->
                    <li class="nav-item active">
                      <nuxt-link to ="/addproduct" class="hero-login-link btn btn-primary">Add The Product</nuxt-link>                     
                    </li>
      </ul>
    <!-- <a  class="container" href="https://www.flipkart.com/">Explore More Product</a> -->
  </div>
</template>

<!-- <script setup>
  const exploremore = () =>{
    //navigateTo('/productlist');
  }
</script> -->





<style>
#imagebackground {
  width: 100vw;
  height: 100vh;
  background: url('/images/onlineShoppingImage.jpeg');
  background-size: cover;
}
.urlcontainer {
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 700px;
}
</style>