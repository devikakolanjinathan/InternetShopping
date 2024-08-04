<template>
    <div class="container product-wrapper">
    <div class="d-flex justify-content-between">
        <div class="title button-color">
            <h2>Product Order</h2>
        </div>
        <div class=""> 
            <nuxt-link to="/productlist">Back to ProductList</nuxt-link>
        </div>
    </div>
        
        
        <div class="content">
            <b-form @submit.stop.prevent>
                <b-form-group label-class="mr-0 cls-required" class="col-md-10" id="input-group-1" label="Product Name" label-for="productName">
                    <b-form-input id="productName" v-model="product.name"  type="text" placeholder="Enter product name" required></b-form-input>
                    <span id="span1" v-if="isSubmit && product.name ==''" class="text-danger">Please enter product name</span>
                </b-form-group>
                <b-form-group label-class="mr-0 cls-required" class="col-md-10" id="input-group-1" label="Quantity" label-for="productQuantity">
                    <b-form-input id="productQuantity" v-model="product.quantity" type="text" placeholder="Enter Quantity"
                        required></b-form-input>
                    <span v-if="isSubmit && product.quantity ==''" class="text-danger">Please enter Quantity</span>
                    <!-- <span v-if="$v.product.quantity.$error && $v.product.quantity.required && !$v.product.quantity.numeric" class="text-danger">Only numbers are permitted.</span> -->
                </b-form-group>
                <div class="d-flex ml-3">
                    <b-button id="submit" class="mr-3 button-color" @click="onSubmit">Submit</b-button>
                    <b-button id="clear" class="clear button-color" @click="clearFormData">Clear</b-button>
                </div>
            </b-form>
        </div>
        <!-- <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="true" color="#0069d9"></loading> -->
    </div>
</template>

<script>
import Vue from "vue";

//import Vuelidate from "vuelidate"
// const { required, numeric } = require('vuelidate/lib/validators')
//const Loading = () => import('vue-loading-overlay')
import axios from 'axios';
import VueRouter from 'vue-router';
//import routes from '@/routes';
 let apiUrl = '';

Vue.use(VueRouter);

export const router = new VueRouter({
  
})



export default {
    data() {
        return {
            product: {
                name: '',
                quantity: '',
                isActive: true,
            },
            isLoading: false,
            isSubmit:false
        }
    },
    // components: {
    //     Loading
    // },
    // validations: {
    //     product: {
    //         name: {
    //             required
    //         },
    //         quantity: {
    //             required,
    //             numeric
    //         }            
    //     }
    // },
    methods: {
        async onSubmit() {
            // this.$v.product.$touch()
            this.isSubmit =true
            if(this.product.name =='' && this.product.quantity =='') {
                return false
            }
            let tmpProduct = {
                productName: this.product.name,
                quantity: parseInt(this.product.quantity),
                isActive: true
            }
            const api = "https://uiexercise.theproindia.com/api/Product/AddProduct"
             await axios.post(api,tmpProduct).then((response) => {
                this.$bvToast.toast(`${this.product.name || ''} Added successfully`, {
                    title: 'Success',
                    toaster: 'b-toaster-top-center',   
                    variant: 'success',
                    solid: true
                })
                this.clearFormData()
               // router.push("/productlist")
                window.location.href = apiUrl+'/productlist'
                //this.$v.product.$reset()
            })
            .catch(() => {
                this.isLoading = false
            })
        },
        clearFormData() {
            this.product.name = ''
            this.product.quantity = ''
            this.isSubmit = false
        }
    }
}

</script>