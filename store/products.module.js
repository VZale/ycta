import RestService from "@/common/rest.service"
import Vue from "vue"

export const state = {
    chosenProducts: {},
    reletedProducts: {},
    searchedProducts: {},
    currentProduct: {},
    sameProducts: {},
    total: 0
}

export const getters = {
    chosenProducts() {
        return state.chosenProducts
    },

    reletedProducts() {
        return state.reletedProducts
    },

    searchedProducts() {
        return state.searchedProducts
    },
    currentProduct() {
        return state.currentProduct
    },
    sameProducts() {
        return state.sameProducts
    },
    total() {
        return state.total
    }
}

export const mutations = {
    chooseProduct(context, data) {
        Vue.set(state.chosenProducts, data.id, data.state = !data.state || false)
    },

    setReletedProducts(context, data) {
        Vue.set(state, 'reletedProducts', data)
    },

    removeReletedProducts(context, id) {
        state.reletedProducts.splice(id, 1)
    },

    clearChosenProducts() {
        Vue.set(state, 'chosenProducts', {})
    },

    setSearchedProducts(context, data) {
        Vue.set(state, 'searchedProducts', data)
    },

    setCurrentProduct(_, data) {
        Vue.set(state, 'currentProduct', data)
    },

    clearCurrentProduct() {
        Vue.set(state, 'currentProduct', {})
        Vue.set(state, 'sameProducts', {})
    }
}

const actions = {
    getProducts(_, data) {
        RestService.get('/products', {
            limit: 18,
            offset: data?.offset || 0
        })
            .then(ans => {
                this.commit('setPageData', {
                    data: ans,
                    page: 'products'
                })
                Vue.set(state, 'total', Object.keys(ans).length)
            })
    },
    getSameproducts(_, data) {
        RestService.get(`/same_product/${data}`).then((ans) => {
            const products = ans.products;
            const sameProducts = {};

            for (let i = 0; i < products.length; i += 4) {
                const group = Math.ceil((i + 1) / 4);
                sameProducts[group] = products.slice(i, i + 4);
            }

            Vue.set(state, 'sameProducts', sameProducts)
        })
    },
    search(context, search) {
        RestService.get(`/products/search?name=${search}`)
            .then(ans => {
                this.commit('setSearchedProducts', ans)
            })
    },
    getSubcategoryProducts(_, id) {
        RestService.get(`/sub_category/${id}`)
            .then(ans => {
                this.commit('setPageData', {
                    data: ans.products,
                    page: 'products'
                })
            })
    },
    getCurrentProduct(_, id) {
        RestService.get(`/product/${id}`)
            .then(ans => {
                if (ans.same_products_id) {
                    this.dispatch('getSameproducts', ans.same_products_id)
                }
                this.commit('clearCurrentProduct')
                this.commit('setCurrentProduct', ans)
            })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
