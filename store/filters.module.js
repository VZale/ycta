import Vue from "vue"
import RestService from "../common/rest.service";

export const state = {
    filters: {}
}

export const getters = {
    filters() {
        return state.filters
    }
}

export const mutations = {
    setAllFilters(context, data) {
        for (const n in data) {
            let name = data[n].name
            if (!state.filters[name]) {
                Vue.set(state.filters, name, {})
            }

            Vue.set(state.filters, name, data[n])
        }
    },
}

const actions = {
    getAllFilter() {
        RestService.get('/filters')
            .then((ans) => {
                this.commit('setAllFilters', ans)
            })
    },
    applyFilter(_, data) {
        console.log(data)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
