import Vue from "vue"
import RestService from "@/common/rest.service"

export const state = {
    fields: {
        productFields: {
            baseFields: {
                name: {
                    label: 'Введите название товара',
                    placeholder: 'Название товара'
                },
                price: {
                    label: 'Введите стоимость товара',
                    placeholder: 'Стоимость товара'
                },
                categories: {
                    label: 'Выберите категорию',
                    placeholder: 'Категория товара',
                    isSelect: true,
                    select: []
                },
                subcategories: {
                    label: 'Выберите подкатегорию',
                    placeholder: 'Подкатегория товара',
                    isSelect: true,
                },
            },
            filterList: {},
            labels: {
                hot: {
                    title: 'Хит продаж',
                    state: false,
                },
                discount: {
                    title: 'Скидка на товар',
                    state: false
                }
            },
            images: {
                useDefault: false,
                images: []
            },
            relatedProducts: []
        },
        categoryFields: {
            baseFields: {
                name: {
                    label: 'Введите название категории',
                    placeholder: 'Название категории'
                },
            },
            images: {
                useDefault: false,
                images: []
            },
        },
        subcategoryFields: {
            baseFields: {
                name: {
                    label: 'Введите название подкатегории',
                    placeholder: 'Название подкатегории'
                },
                categories: {
                    label: 'Выберите в какой категории будет находиться эта подкатегория',
                    placeholder: 'Категория товара',
                    isSelect: true,
                },
            }
        },
        relatedProducts: []
    },
    pageData: {
        categories: {},
        subcategories: {},
        products: {}
    },
    initPages: {
        categories: false,
        subcategories: false,
        products: false,
    },
    applicationModal: false,
    mainSlider: {},
    aboutSlider: {}
}

export const getters = {
    fields() {
        return state.fields
    },
    pageData() {
        return state.pageData
    },
    initPages() {
        return state.initPages
    },
    applicationModal() {
        return state.applicationModal
    },
    mainSlider() {
        return state.mainSlider
    },
    aboutSlider() {
        return state.aboutSlider
    }
}

export const mutations = {
    initPage(context, page) {
        Vue.set(state.initPages, page, true)
    },
    setPageData(context, data) {
        Vue.set(state.pageData, data.page, {})
        for (const item in data.data) {
            if (!state.pageData[data.page][data.data[item]._id]) {
                Vue.set(state.pageData[data.page], data.data[item]._id, {})
            }
            Vue.set(state.pageData[data.page], data.data[item]._id, data.data[item])
        }
    },
    removePageData(_, data) {
        Vue.delete(state.pageData[data.page], data._id)
    },
    hidePageData(_, data) {
        Vue.set(state.pageData[data.page][data.data._id], 'hidden', data.data.hidden)
    },
    setApplicationModal(_, data) {
        Vue.set(state, 'applicationModal', data)
    },
    setMainSlider(_, data) {
        Vue.set(state, 'mainSlider', data)
    },
    setAboutSlider(_, data) {
        Vue.set(state, 'aboutSlider', data)
    },
}

const actions = {
    sendMail(_, data) {
        RestService.post('/mail/feedback', data)
            .then(() => {
                this.commit('setApplicationModal', true)
            })
    },
    sendChoseProduct(_, data) {
        RestService.post('/mail/feedback/product', data)
            .then((ans) => {
                window.open(ans.url, '_blank')
                this.commit('setApplicationModal', true)
            })
    },
    getMainSlider() {
        RestService.get('/sliders/main')
            .then((ans) => {
                this.commit('setMainSlider', ans)
            })
    },
    getAboutSlider() {
        RestService.get('/sliders/about')
            .then((ans) => {
                this.commit('setAboutSlider', ans)
            })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
