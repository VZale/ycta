<template>
    <div class="guarantee page">
        <TopBar/>
        <div class="container">
            <Breadcrumbs :menuList="menuList"/>

            <h2 class="title">Доставка</h2>
            <div class="page-box">
                <h3>Доставка осуществляется следующим автотранспортом:</h3>
                <ul>
                    <li>Малотоннажным авто до 1,5 тонн (длина авто 5 метров)</li>
                    <li>Кран-манипулятор до 5 тонн (длина авто 7 метров, стрела 3-4 метра)</li>
                    <li>Кран-манипулятор до 10 тонн (длина авто 10 метров, стрела 4-12 метров)</li>
                    <li>Бортовое или тентованное авто от 10 до 20 тонн (длина авто 18 метров)</li>
                </ul>
                <h3>Гарантии</h3>
                <ul>
                    <li>Товар доставляется на поддонах в термоусадочной плёнке</li>
                    <li>Товар сопровождается товарно-транспортной накладной завода-производителя</li>
                    <li>При выявлении недостатков по количеству, ассортименту или качеству (внешнему виду) в момент
                        приёмки товара составляется Акт о выявленных несоответствиях
                    </li>
                </ul>
                <h3>Важно</h3>
                <ul>
                    <li>Место доставки должно иметь расчищенные подъездные не погодозависимые пути к объекту (асфальт,
                        дорожные плиты, песчано-цебеночная отсыпка) и достаточное место для разворота машин
                    </li>
                    <li>В случае следования по трассам с пропускным режимом, покупателю нужно подготовить пропуска на
                        трассы специального назначения
                    </li>
                    <li>Нормативное время разгрузки составляет 2 часа</li>
                    <li>Количество нормативного боя при перевозке составляет 5% в соответствии с действующим
                        законодательством
                    </li>
                </ul>
            </div>
            <Consultation/>
        </div>
        <SocialBar/>
        <Footer/>
    </div>
</template>

<script>
export default {
    name: "Guarantee",
    components: {
        TopBar: () => import('@/components/TopBar.vue'),
        Footer: () => import("@/components/Footer.vue"),
        Breadcrumbs: () => import("@/components/Breadcrumbs.vue"),
        Consultation: () => import("@/components/Consultation.vue"),
        SocialBar: () => import('@/components/SocialBar')
    },
    data() {
        return {
            menuList: [
                {title: 'Доставка'},
            ]
        }
    }
}
</script>

<style scoped>


h3 {
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
    color: #32343B;
    margin-bottom: 24px;
}

ul {
    margin-bottom: 40px;
}

ul:last-child {
    margin: 0;
}

ul li {
    list-style: disc;
    list-style-position: inside;
    margin-bottom: 8px;
}

ul li:last-child {
    margin: 0;
}

.consultation {
    margin-bottom: 50px;
}

</style>
