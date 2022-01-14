<template>
    <section>
        <div class="w-full rounded-3xl p-5" v-if="!isLoading">
            <div class="flex">
                <div class="w-full md:w-4/12">
                    <div>
                        <img :src="product.image" alt="" class="w-32 h-32 w-full object-cover overflow-hidden">
                    </div>
                    <div class="mt-3">
                        <p class="font-bold text-2xl">{{product.name}}</p>
                    </div>
                    <div class="mt-3">
                        <p class="font-normal text-xl">{{product.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {API_URL} from "/src/constants";
    import axios from "axios";

    export default {
        name: "Show",
        props: [
            'id'
        ],
        data: function () {
            return {
                server: API_URL,
                isLoading: true,
                product: null,
            }
        },
        mounted() {
            this.getProduct();
        },
        methods: {
            getProduct() {
                axios.get(this.server + 'api/getProduct/' + this.id).then(response => {
                    this.product = response.data;
                    this.isLoading = false;
                }).catch(function (error) {
                    console.log(error.toJSON());
                });
            },
        }
    }
</script>

<style scoped>

</style>