import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {
                name: 'one',
                price: 10
            },
            {
                name: 'two',
                price: 11
            }
        ]
    },
    getters: {
        saleProducts: state => {
            let saleProducts = state.products.map(product => {
                return {
                    name: '*' + product.name + '*',
                    price: product.price + '$'
                }
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: (state, amount) => {
            state.products.forEach(product => {
                product.price -= amount;
            })
        }
    },
    actions: {
        reducePrice: (context, amount) => {
            setTimeout(function(){
                context.commit('reducePrice', amount)
            },3000);
        }
    }
});