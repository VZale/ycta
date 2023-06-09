<template>
    <section class="consultation" :class="{'is-modal': isModal, successfully: applicationModal}">
        <div class="container">
            <div class="box">
                <div class="close" v-if="isModal" @click="$emit('close-modal')">
                    <img :src="require('@/assets/ycta-icons/close.png')" alt="">
                </div>
                <div class="item">
                    <div class="top">
                        <h2>{{ title }}</h2>
                        <img :src="require('@/assets/ycta-icons/call.png')" alt="">
                    </div>
                    <p v-if="!nickname">Поможем с подбором материала, посчитаем стоимость с доставкой, расскажем об
                        акциях и скидках</p>
                </div>
                <div class="item form">
                    <div class="form-items">
                        <div class="form-item" :class="{'is-focus': inputIsActive['full_name']}">
                            <p>Ваше имя</p>
                            <input v-model="userInfo.full_name" type="text" @focus="setFocus('full_name')"
                                   @blur="removeFocus()">
                        </div>
                        <div class="form-item" :class="{'is-focus': inputIsActive['phone']}">
                            <p>Номер телефона</p>
                            <input v-model="userInfo.phone" type="text" @focus="setFocus('phone')"
                                   @blur="removeFocus()">
                        </div>
                        <div class="form-item email" :class="{'is-focus': inputIsActive['email']}">
                            <p>Электронная почта</p>
                            <input v-model="userInfo.email" type="text" @focus="setFocus('email')"
                                   @blur="removeFocus()">
                        </div>
                        <div v-if="nickname" class="form-item nickname"
                             :class="{'is-focus': inputIsActive['nickname']}">
                            <p>Nickname</p>
                            <input v-model="userInfo.nickname" type="text" @focus="setFocus('nickname')"
                                   @blur="removeFocus()">
                        </div>
                    </div>
                    <div class="form-items">
                        <button class="button white large" @click="send()">Отправить заявку</button>
                        <p>Нажимая на кнопку, вы соглашаетесь с
                            <NuxtLink to="/privacy">Политикой конфиденциальности</NuxtLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <ModalBox v-if="applicationModal">
            <template #modalContent>
                <Application @close-modal="closeModal()" :isModal="true"/>
            </template>
        </ModalBox>
    </section>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    name: "Consultation",
    props: {
        isModal: {
            type: Boolean,
            default: false,
        },
        nickname: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'Давайте начнем с консультации'
        },
        productId: {
            type: String,
            default: ''
        },
        social: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            inputIsActive: {
                full_name: false,
                phone: false,
                email: false,
                nickname: false,
            },
            userInfo: {
                full_name: '',
                phone: '',
                email: '',
                nickname: '',
            },
        }
    },
    computed: {
        ...mapGetters(['applicationModal'])
    },
    methods: {
        setFocus(item) {
            this.$set(this.inputIsActive, item, true)
        },
        clearData() {
            for (const n in this.userInfo) {
                this.userInfo[n] = ''
            }
        },
        removeFocus() {
            for (const item in this.inputIsActive) {
                if (!this.userInfo[item]) {
                    this.$set(this.inputIsActive, item, false)
                }
            }
        },
        send() {
            if (!this.nickname) {
                this.$delete(this.userInfo, 'nickname')
            }

            if (this.social) {
                this.userInfo['social'] = this.social
            }

            if (this.productId) {
                this.userInfo['product_id'] = this.productId
            }

            const formData = Object.entries(this.userInfo).reduce((acc, [key, value]) => {
                if (value) {
                    acc[key] = value
                }
                return acc
            }, {})

            if (Object.keys(formData).length > 2 && !this.nickname && !this.social) {
                this.$store.dispatch('sendMail', formData)
            } else if (this.nickname || this.social) {
                this.$store.dispatch('sendChoseProduct', formData)
            }
            this.clearData()
        },
        closeModal() {
            this.$store.commit('setApplicationModal', false)
            this.clearData()
            this.$emit('close-modal')
        }
    }
}
</script>

<style scoped>
.consultation {
    margin: 80px 0;
}

.consultation .container {
    padding: 0;
}

.consultation .box {
    border-radius: 12px;
    padding: 40px;
    color: var(--white);
    background-color: #BB2329;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    place-items: center stretch;
}

.consultation .item .top {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    margin-bottom: 24px;
    place-items: end;
}

.top h2 {
    font-weight: 500;
    font-size: 52px;
    line-height: 105%;
    max-width: 430px;
}

.item p {
    max-width: 450px;
}

.item.form .form-items {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 12px;
    margin-bottom: 24px;
}

.form-items .form-item {
    background: #C54449;
    border-radius: 8px;
    height: 53px;
    position: relative;
}

.form-items p {
    color: #E7B0B2;
}

.form-items a {
    color: var(--white);
}

.form-item:focus {
    background-color: black;
}

.form-items .form-items:last-child {
    margin-bottom: 0;
}

.form-items .form-item p {
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    color: #E7B0B2;
    z-index: 2;
    transition: all .3s ease-in-out;
}

.form-items .form-item.is-focus p {
    font-size: 12px;
    top: 17px;
}

.form-items .form-item.nickname {
    grid-area: 3/span 2;
}

.form-items .form-item.email {
    grid-area: 2/span 2;
}

input {
    height: 100%;
    width: 100%;
    outline: none;
    background-color: transparent;
    color: var(--white);
    font-size: 18px;
    position: relative;
    z-index: 3;
    font-weight: 400;
    padding: 35px 14px;
}

button {
    font-size: 18px;
    font-weight: 500;
}

.consultation.is-modal {
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.consultation.successfully .box {
    display: none;
}

.consultation.is-modal .container {
    padding: 0;
}

.consultation.is-modal .box {
    grid-template-columns: 1fr;
}

.close {
    position: absolute;
    top: 30px;
    right: 40px;
    cursor: pointer;
}

@media (max-width: 1000px) {
    .consultation {
        max-width: 100%;
        padding: 0;
        margin: 40px auto 0;
    }

    .consultation.is-modal {
        width: 100%;
        bottom: 0;
        top: auto;
        transform: translate(-50%, 0);
        border-radius: 12px 12px 0 0;
    }

    .item.form .form-items {
        grid-template-columns: 1fr;
    }

    .consultation .item .top {
        display: inline-block;
    }

    .consultation .top img {
        display: none;
    }

    .close {
        left: 10px;
        top: 10px;
    }

    .form-items .form-item {
        grid-area: auto !important;
    }

    .consultation .box {
        grid-template-columns: 1fr;
        padding: 28px;
    }

    .consultation .item .top {
        grid-template-columns: max-content 1fr;
    }

    .top h2 {
        font-size: 28px;
        line-height: 110%;
        max-width: 100%;
    }

    input,
    .item p {
        font-size: 16px;
        max-width: 100%;
    }

    .form-item.is-focus input {
        font-size: 12px;
    }
}
</style>
