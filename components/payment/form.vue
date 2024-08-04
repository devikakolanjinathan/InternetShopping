<template>
    <div>
        <body>
        <div class="row">
  <div class="col-75">
    <div class="container">
      <form>
        <div class="row">
          <div class="col-50">
            <h3 class="colorlabel">Billing Address</h3>
            <label class="colorlabel" for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" v-model="fullname" name="firstname" placeholder="John M. Doe" required>
            <label class="colorlabel" for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" v-model="email" name="email" placeholder="john@example.com" required>
            <label class="colorlabel" for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" v-model="address" name="address" placeholder="542 W. 15th Street" required>
            <label class="colorlabel" for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" v-model="city" name="city" placeholder="New York" required>

            <div class="row">
              <div class="col-50">
                <label class="colorlabel" for="state">State</label>
                <input type="text" v-model="state" name="state" placeholder="NY" required>
              </div>
              <div class="col-50">
                <label class="colorlabel" for="zip">Zip</label>
                <input type="text" v-model="zip" name="zip" placeholder="10001" required>
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3 class="colorlabel">Payment</h3>
            <label class="colorlabel" for="fname">Accepted Cards</label>
            <img src="https://t3.ftcdn.net/jpg/05/19/16/38/240_F_519163846_ggMv74dIvkoSLXoTagIEfQYMKol2K5P6.jpg" alt="card"/>
            <div class="icon-container colorlabel">
              <i class="bi bi-credit-card"></i>
              <i class="fa fa-cc-visa" style="color:navy;"></i>
              <i class="fa fa-cc-amex" style="color:blue;"></i>
              <i class="fa fa-cc-mastercard" style="color:red;"></i>
              <i class="fa fa-cc-discover" style="color:orange;"></i>
            </div>
            <label class="colorlabel" for="cname">Name on Card</label>
            <input type="text" v-model="cname" name="cardname" placeholder="John More Doe" required>
            <label class="colorlabel" for="ccnum">Credit card number</label>
            <input type="text" v-model="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required>
            <label class="colorlabel" for="expmonth">Exp Month</label>
            <input type="text" v-model="expmonth" name="expmonth" placeholder="September" required>
            <div class="row">
              <div class="col-50">
                <label class="colorlabel" for="expyear">Exp Year</label>
                <input type="text" v-model="expyear" name="expyear" placeholder="2018" required>
              </div>
              <div class="col-50">
                <label class="colorlabel" for="cvv">CVV</label>
                <input type="text" v-model="cvv" name="cvv" placeholder="352" required>
              </div>
            </div>
          </div>
          
        </div>
        <label>
          
        </label>
        <button class="btn" @click="submit()"> Confirm Order</button>
      </form>
    </div>
  </div>

 
</div>
</body>
    </div>
</template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
<script>
//import Vuelidate from "vuelidate"
import BootstrapVue from "bootstrap-vue";
import axios from 'axios';
import Vue from "vue";

export const EventBus = new Vue();
// import {
//      required,
//  } from "vuelidate/lib/validators";
// Vue.use(Vuelidate)

Vue.use(BootstrapVue);
export default {
    data(){
        return{
            fullname:"",
            email:'',
            address:"",
            city:"",
            state:"",
            zip:"",
            cname:"",
            ccnum:"",
            expmonth:"",
            expyear:"",
            cvv:'',
            product:{}
        }
    },
    // validations: {
    //     fullname: {
    //         required,
    //     },
    //     email: {
    //         required,
    //     },
    //     address: {
    //         required,
    //     },
    //     city: {
    //         required,
    //     },
    //     state: {
    //         required,
    //     },
    //     zip: {
    //         required,
    //     },
    //     nameonCard: {
    //         required,
    //     },
    //     cardnumber: {
    //         required,
    //     },
    //     expMonth: {
    //         required,
    //     },
    //     expyear: {
    //         required,
    //     },
    //     cvv: {
    //         required,
    //     }
    // },
    methods:{
        async submit(){
        if(this.fullname !='' && this.email !='' && this.address !='' && this.city !='' && this.state !='' && this.zip!='' && this.cname !='' && this.ccnum!='' && this.expmonth && this.expyear && this.cvv){
            return false
        }
        let tmpProduct = {
                productId: this.product.ProductId ? this.product.ProductId : this.$route.query.productname,
                quantity: this.product.selectedQuantity ? this.product.selectedQuantity : this.$route.query.quantity,
                customerId: "f9e86959-d568-44b9-2087-08dc44a8c8ef",

            }
        const api = "https://uiexercise.theproindia.com/api/Order/AddOrder"
        let { data } = await axios.post(api,tmpProduct);
        console.log('data',data)
            this.$bvToast.toast('Your order successfully confirm', {
            title: 'Success',
            toaster: 'b-toaster-top-center',
            variant: 'success',
            solid: true 
            })
            this.$router.push({
                path: '/confirmation'
            });
       
    },
    mounted(){
        EventBus.$on('orderProduct', (value) => {
            this.product = value
        })
    },
    beforeDestroy(){
        EventBus.$off('orderProduct')
    }
}
    
}
</script>
<style>
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: #04AA6D;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #45a049;
}

a {
  color: #2196F3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
body {
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
}
* {
  box-sizing: border-box;
}
.colorlabel{
    color: black;
}

</style>
