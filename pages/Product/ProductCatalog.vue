<template>
    <div class="page">
        <TopBar/>
        <div class="container">
            <Breadcrumbs :menuList="menuList"/>
            <div class="content">
                <ProductFilter @show-result="result"/>
                <div class="right">
                    <div class="top-content">
                        <h2 class="title">{{
                                $route.params?.name?.replaceAll('-', ' ').charAt(0).toUpperCase() + $route.params?.name?.replaceAll('-', ' ').slice(1)
                            }}</h2>
                        <p class="price-filter" @click="filterByPrice()"> По цене</p>
                    </div>
                    <div class="product-list">
                        <template v-for="product in pageData['products']">
                            <Card v-if="product && !product.hidden"
                                  :type="'product'"
                                  :title="product.name"
                                  :price="product.price"
                                  :description="product.description"
                                  :image="product.images ? product.images[0] : ''"
                                  :labels="product.labels"
                                  :isHidden="product.hidden"
                                  :button-text="'моделей'"
                                  :pathName="'Товар'"
                                  :pathParams="[`${Object.values(pageData['categories']).find(category => category._id === product.category_id)?.name}`,`${Object.values(pageData['subcategories']).find(subcategory => subcategory._id === product.sub_category_id)?.name}`,`${product.name}`,`${product._id}`]"
                            />
                        </template>
                    </div>
                    <Pagination/>
                    <div class="info">
                        <div class="text-content">
                            <h3 class="subtitle">Характеристики и свойства кирпича ручной формовки</h3>
                            <p class="subdesc">Кирпич ручной формовки – строительный материал с уникальным цветовым
                                разнообразием,
                                отличающийся высокими эксплуатационными и качественными характеристиками. Применяется
                                для
                                реставрации старинных зданий и сооружений, внутренних конструкций в виде каминов,
                                дымоходов,
                                печей,
                                облицовки фасадов. Основные преимущества материала – грубая, стилизованная под старину
                                поверхность и
                                неповторимость цветовой палитры</p>
                        </div>
                        <div class="text-content">
                            <h3 class="subtitle">
                                Основные характеристики материала
                            </h3>
                            <p class="subdesc">
                                К отличительным особенностям кирпича ручной формовки, представленного в нашем
                                интернет-магазине
                                российскими заводами, относятся:
                            </p>
                            <ul>
                                <li>
                                    экологически чистый состав – исключительно сланцевая глина желтого, розового,
                                    красного,
                                    серого
                                    цветов;
                                </li>
                                <li>
                                    высокая паропроницаемость, обеспечивающая хороший воздухообмен между контактируемыми
                                    поверхностями, предотвращающий накопление сырости и распространение болезнетворных
                                    микроорганизмов;
                                </li>
                                <li>
                                    устойчивость к температурным перепадам и ультрафиолету;
                                </li>
                                <li>
                                    эксклюзивность внешнего вида, обусловленного включениями в состав глины разных
                                    цветов;
                                </li>
                                <li>
                                    оптимальные показатели звуко- и теплоизоляции;
                                </li>
                                <li>
                                    отличная адгезия с цементно-песчаными растворами;
                                </li>
                                <li>
                                    пожаробезопасность, негорючесть;
                                </li>
                                <li>
                                    продолжительный срок службы – около полувека;
                                </li>
                            </ul>
                            <p class="subdesc">
                                Производится кирпич ручной формовки по традиционным рецептам с применением современных
                                технологий.
                                Глина очищается от примесей, в нее добавляется определенное количество воды, весь состав
                                перемешивается до получения однородной консистенции. Затем раствор укладывают в формы,
                                предварительно просыпанные песком. Последний компонент делает поверхность изделия
                                шероховатой и
                                фактурной. Лотки с формами отправляются на сушку, проходящую под действием определенной
                                температуры
                                и влажности. Далее изделия подвергают термическому воздействию в специальных печах при
                                температуре
                                100ºС, остужают и изымают из формы.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>

</template>

<script>
import Vue from "vue"
import {mapGetters} from "vuex";

export default {
    name: "ProductCatalog",
    components: {
        Pagination: () => import('@/components/Pagination'),
        RelatedProducts: () => import('@/components/RelatedProducts'),
        Card: () => import('@/components/Card'),
        ProductFilter: () => import('@/components/ProductFilter'),
    },
    mounted() {
        console.log(this.$route.params)
        if (this.$route.params.category_name) {
            this.menuList.push({
                title: this.$route.params.category_name.replaceAll('-', ' ')
            })
            this.$store.dispatch('getSubcategoryProducts', this.$route.params._id)
        } else {
            this.menuList.push({
                title: this.$route.params.name.replaceAll('-', ' ')
            })
            this.$store.dispatch('getProducts')
        }
        console.log(this.pageData['products'])
        this.updateFilteredProducts()
    },
    data() {
        return {
            menuList: [
                {title: 'Каталог товаров', to: '/catalog'},
            ],
            filteredData: [],
            filteredProducts: [],
            sortOrder: "asc",
        }
    },
    computed: {
        ...mapGetters(['pageData'])
    },
    methods: {
        result(data) {
            Vue.set(this, 'filteredData', data)
            this.updateFilteredProducts()
        },
        updateFilteredProducts() {
            const selectedFilters = Object.values(this.filteredData).flat()

            if (selectedFilters.length === 0) {
                this.filteredProducts = Object.values(this.pageData['products']);
            } else {
                this.filteredProducts = Object.values(this.pageData['products']).filter((product) => {
                    const productFilters = Object.values(product);
                    return selectedFilters.some((filter) => productFilters.includes(filter));
                })
            }
        },
        filterByPrice() {
            // Toggle the sort order
            this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";

            // Sort the products by price
            if (this.sortOrder === "asc") {
                this.filteredProducts = this.products.sort((a, b) => {
                    return a.price - b.price;
                });
            } else {
                this.filteredProducts = this.products.sort((a, b) => {
                    return b.price - a.price;
                });
            }
        },
    },
}
</script>

<style scoped>
.container {
    min-height: 700px;
}

.content {
    display: grid;
    grid-template-columns: 330px 1fr;
    gap: 12px;
    margin: 40px 0 120px;
}

.title {
    margin-left: 10px;
    margin-top: 0;
}

.product-list {
    margin-top: 40px;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.info .text-content {
    margin-bottom: 40px;
    font-size: 18px;
}

.info .text-content:last-child {
    margin-bottom: 0;
}

.info h3 {
    margin-bottom: 24px;
    font-size: 40px;
    font-weight: 500;
}

.info ul {
    margin: 20px 0;
}

.info li {
    margin-bottom: 8px;
    list-style: disc;
    list-style-position: inside;
}

.info li:last-child {
    margin-bottom: 0;
}

.top-content {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
}

.price-filter {
    position: relative;
    color: var(--red-1);
    padding-left: 32px;
    cursor: pointer;
}

.price-filter::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url("@/assets/ycta-icons/price-filter.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
