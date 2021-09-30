<template>
    <section>
        <h1 class="title">Товары</h1>
        <div class="products">
            <div class="product" v-for="product in products" :key="product.id">
                <img :src="product.url_image ?? 'https://www.crushpixel.com/big-static18/preview4/toy-seamless-pattern-baby-pattern-2822639.jpg'" :alt="product.name">
                <p>{{product.name}}</p>
                <p>{{product.price}} руб.</p>
                <router-link :to="'/products?id='+product.id" class="link">Подробнее</router-link>
            </div>
        </div>
        <ModalWindow v-if="isShowWindow"></ModalWindow>
    </section>
</template>

<script>
import ModalWindow from './ModalWindow.vue'

export default {
    data() {
        return {
            products: [
                { id: 1, name: "Кукла Cheer Doll", url_image: "https://cdn.toy.ru/upload/iblock/ab2/5.jpg?_cvc=1631920426", price: 5000 },
                { id: 2, name: "Кукла Ruby Anderson", url_image: "https://cdn.toy.ru/upload/iblock/d28/4.jpg?_cvc=1631920426", price: 5000 },
                { id: 3, name: "Машина в спортивном дизайне Р/У", url_image: "https://cdn.toy.ru/upload/iblock/5b4/yk_2052rm_6.jpg?_cvc=1631920426", price: 2200 },
                { id: 4, name: "Фигурка героя Apocalypse Rising 2", url_image: "https://cdn.toy.ru/upload/iblock/8b4/81kgmibe_el._ac_sl1500_.jpg?_cvc=1631920426", price: 3100 },
            ],
            isShowWindow: false
        }
    },
    components: {
        ModalWindow
    }
}
</script>

<style>
.title {
    padding: 1% 5%;
    width: 90%;
}
.products {
    padding: 2% 5%;
    width: 90%;
    display: grid;
    grid-gap: 16px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 200px);
}
.products .product {
    height: 260px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px var(--main-color);
    border-radius: 10px;
}
.products .product img {
    height: 70%;
    border-radius: 10px;
}
.products .link, .products .product p {
    width: fit-content;
    text-align: center;
    margin: auto;
}
</style>