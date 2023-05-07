import RestService from "@/common/rest.service"
import Vue from "vue"

export const state = {
    totalCategories: 0
}

export const getters = {
    totalCategories() {
        return state.totalCategories
    }
}

export const mutations = {}

const actions = {
    getCategories() {
        RestService.get('/categories')
            .then(ans => {
                this.commit('setPageData', {
                    data: ans,
                    page: 'categories'
                })
                if(Object.keys(ans).length > 3) {
                    Vue.set(state,'totalCategories', Object.keys(ans).length)
                }
            })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
