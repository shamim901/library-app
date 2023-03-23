<template>
    <div>
        <h1>Product list</h1>
        <ul>
            <li v-for="product in products">
                {{ product.title }}
            </li>
        </ul>
    </div>
</template>

<script>

    import shop from './api'

    export default {
        data () {
            return {
                products: []
            }
        },
        created () {
            shop.getProducts(product => {
                this.products = product
            })
        }
    }
</script>