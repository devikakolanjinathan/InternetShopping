<template>
    <div>
      <productlist-list :responseData="response"/>
    </div>
</template>
<script>

import axios from 'axios';
export default {
    async asyncData() {
    const api = "https://uiexercise.theproindia.com/api/Product/GetAllProduct"
    let { data } = await axios.get(api);
    console.log('data',data)
    return { response: data };
  },
    data: function () {
        return {
           
        };
    },
    methods(){
    
    }
}
</script>
