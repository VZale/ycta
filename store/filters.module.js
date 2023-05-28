import Vue from "vue"
import RestService from "../common/rest.service"

export const state = {
    filters: {},
    filtersList: {}
}

export const getters = {
    filters() {
        return state.filters
    },
    filtersList() {
        return state.filtersList
    }
}

export const mutations = {
    setAllFilters(context, data) {
        for (const n in data) {
            let name = data[n].slug
            if (!state.filters[name]) {
                Vue.set(state.filters, name, {})
            }

            Vue.set(state.filters, name, data[n])
        }
    },
    setFiltersList(context, data) {
        Vue.set(state, 'filtersList', data)
    },
}

const actions = {
    getAllFilter() {
        RestService.get('/filters')
            .then((ans) => {
                this.commit('setAllFilters', ans)
            })
    },
    getFilterList() {
        RestService.get('/filters/list')
            .then((ans) => {
                this.commit('setFiltersList', ans)
            })
    },
    applyFilter(_, data) {
        const filteredData = {}
        for (const [key, value] of Object.entries(data)) {
            if (Array.isArray(value) && value.length) {
                filteredData[key] = value
            }
        }

        RestService.post('/filters/search/products', filteredData)
            .then(ans => {
                this.commit('setPageData', {
                    data: ans,
                    page: 'products'
                })
            })
    },
    resetFilter() {
        RestService.get('/products')
            .then(ans => {
                this.commit('setPageData', {
                    data: ans,
                    page: 'products'
                })
            })
    },
    filterByPrice(_, data) {
        const {price, ...dataWithoutPrice} = data
        RestService.post(`/filters/search/products?price=${price}`, dataWithoutPrice.data)
            .then(ans => {
                this.commit('setPageData', {
                    data: ans,
                    page: 'products'
                })
            })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
