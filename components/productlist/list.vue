<template>
  <div class="listimagebackground">
    <nav class="backsearch">
      <nuxt-link to ="/#" class="text-white">Back to Home
      </nuxt-link>
    </nav>
    <div class="">
    <div class="d-flex flex-wrap justify-content-between product-wrapper row">
      <div v-for="(reskey, resValue) in displayProductList" :key="resValue" class="col-4">
        <div class="card mt-2">
          <img :src="`https://picsum.photos/600/300/?image=${resValue}`" alt="Denim Jeans" style="width:100%">
          <h1>{{ reskey.ProductName }}</h1>
          <p class="price">${{getAmount(resValue)}}</p>
        <div v-if="reskey.Quantity > 0">
            <label for="quantity">Quantity :</label>
              <input type="number" id="quantity" name="quantity" :value="1" min="1" :max="reskey.Quantity">
            <nuxt-link :to="`/paymentform/?productname=${reskey.ProductId}&quantity=${reskey.Quantity}`" class="buynowbutton" @click="orderProduct(reskey)">Buy Now</nuxt-link>
        </div>
        <div v-else>
          <button class="outofbutton">Out of Stock</button>
        </div>
        </div>
      </div>
      <div class="d-flex justify-content-end mt-2 text-align-right">
        <b-pagination @input="linkGen" v-model="pageNumber" :total-rows="responseData.length" :per-page="pageSize"
          aria-controls="my-table"></b-pagination>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import Vue from "vue";

export const EventBus = new Vue();
export default {
  props: ['responseData'],
  data(){
    return{
      pageNumber:1,
      pageSize:12,
      displayProductList:[],
      filter:''
    }
  },
  methods:{
    linkGen(pageNum) {
        this.pageNumber = pageNum
        this.displayProductList = this.responseData.slice(((this.pageSize * this.pageNumber) - 12), this.pageSize * this.pageNumber)
    },
    getAmount(val){
      let amount = Math.floor((Math.random() * val)+100)
      return amount
    },
    orderProduct(value){
      EventBus.$emit('orderProduct', value)
    }
  },
  created(){
    this.displayProductList = this.responseData.slice(((this.pageSize * this.pageNumber) - 12), this.pageSize * this.pageNumber)
  }
}

</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 450px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}


.buynowbutton {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
.outofbutton {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #851919;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}

.product-wrapper {
  margin-top: 100px !important;
}
.listimagebackground {
  width: 100vw;
  height: 400vh;
  background-color: antiquewhite;
  background-size: cover;
}
.backsearch{
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color: #2b85b6; /* Green */
  border: none;
  color: white;
}
</style>