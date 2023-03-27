<template>
    <div class="payment page">
        <TopBar/>
        <div class="container">
            <Breadcrumbs :menuList="menuList"/>
            <h2 class="title">Оплата</h2>
            <div class="page-box">
                <h3 class="sub-title">Способы оплаты</h3>
                <div class="items">
                    <div class="item">
                        <h4>Наличными</h4>
                        <p>Оплатить товар наличными вы можете в офисе и на складиских комплексах компании Строительный
                            Двор «УСТА», а также водителю при получении товара на объекте </p>
                    </div>
                    <div class="item">
                        <h4>Картой и по QR-коду</h4>
                        <p>Условия оплаты банковской картой уточняйте у менеджеров </p>
                    </div>
                    <div class="item">
                        <h4>По безналичному расчету с НДС</h4>
                        <p>Договор-счет действителен в течение 2 (двух) банковских дней. Для оплаты по безналичному
                            расчету достаточно согласовать с менеджером сроки поставки товара и получить
                            договор-счет</p>
                    </div>
                    <div class="item">
                        <h4>Отсрочка платежа</h4>
                        <p>Данная услуга доступна только юр. лицам. Вы можете заполнить форму для отправки запроса на
                            отсрочку</p>
                    </div>
                </div>
                <h3 class="sub-title">Гарантии</h3>
                <p class="sub-desc">Компания Строительный Двор «УСТА» сотрудничает с ведущими производителями
                    строительных материалов России. Вся продукция, представленная в магазине, сертифицирована, все
                    заводы-производители предоставляют гарантии качества</p>
            </div>

            <Consultation/>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
    name: "Payment",
    components: {
        TopBar: () => import('@/components/TopBar.vue'),
        Footer: () => import("@/components/Footer.vue"),
        Breadcrumbs: () => import("@/components/Breadcrumbs.vue"),
        Consultation: () => import("@/components/Consultation.vue"),
    },
    data() {
        return {
            menuList: [
                {title: 'Оплата'},
            ]
        }
    }
}
</script>

<style scoped>

.sub-title {
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
    color: var(--black);
    margin-bottom: 24px;
}

.items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 40px;
}

.items .item {
    height: 220px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 24px;
    background: var(--gray-2);
    border-radius: 12px;
}

.item h4 {
    font-weight: 500;
    font-size: 21px;
    line-height: 120%;
    color: var(--black);
}

.item p {
    font-size: 16px;
}
</style>
