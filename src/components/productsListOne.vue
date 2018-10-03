<template>
    <div class="products-list-one">
        <h3>Products list one</h3>
        <ul>
            <li v-for="(product, index) in saleProducts" :key="index">
                <div>{{product.name}}</div>
                <div>{{product.price}}</div>                
            </li>
        </ul>
        <button v-on:click='reducePrice(4)'>Reduce Price</button>
    </div>
</template>

<script>
  import { mapActions } from "vuex";
  import { mapGetters } from "vuex";

  export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
        ...mapGetters(["saleProducts"])
        // saleProducts(){
        //     return this.$store.getters.saleProducts
        // }
    },
    methods: {
        ...mapActions(["reducePrice"])
        // reducePrice: function(amount) {
        //     this.$store.dispatch('reducePrice', amount);
        // }
    }
  };
</script>

<style>

</style>
