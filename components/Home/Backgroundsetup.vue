<template>
  <div id="imagebackground">
    <h1 class="headingClass">Welcome to ShopFlexco</h1>
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
.headingClass{
  color: aliceblue;
  justify-content: center;
  align-items: center; 
  text-align: center;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(19,150,150,1) 35%, rgba(0,212,255,1) 100%);
}
</style>