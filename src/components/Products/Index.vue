<template>
    <section>
        <div class="h-40 flex items-center justify-between font-bold pl-5">
            <p class="text-2xl font-bold">Products</p>
            <router-link :to="{name: 'products/create'}">
                <button class="rounded-lg py-2 px-3 font-bold bg-green-400 hover:bg-green-500 transition transition-500 text-white">
                    Create new
                </button>
            </router-link>
        </div>
        <div class="w-full rounded-3xl p-5" v-if="!isLoading">
            <div>
                <div :key="product.id" class="border p-3 grid grid-cols-12 rounded-lg mt-1 bg-white" v-for="(product, index) in products.data">
                    <div class="col-span-2 px-3"><img :src="product.image" alt="" class="w-28 h-28 w-full object-cover overflow-hidden"></div>
                    <div class="col-span-3 flex items-center px-3">{{product.name.length > 30 ? product.name.slice(0, 30)+'...' : product.name }}
                    </div>
                    <div class="col-span-4 flex items-center px-4">{{product.description && product.description.length > 100 ?
                        product.description.slice(0,
                        100)+'...' : product.description}}
                    </div>
                    <div class="col-span-3 flex items-center justify-center">
                        <router-link :to="{name: 'products/show', params: {id: product.id}}">
                            <div class="w-12 h-12 rounded bg-blue-200 hover:bg-blue-300 transition transition-500 flex items-center justify-center cursor-pointer mr-4">
                                <svg aria-hidden="true" class="svg-inline--fa fa-eye fa-w-18" data-icon="eye" data-prefix="far" focusable="false" height="20"
                                     role="img" viewBox="0 0 576 512" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
                                          fill="currentColor"></path>
                                </svg>
                            </div>
                        </router-link>
                        <router-link :to="{name: 'products/edit', params: {id: product.id}}">
                            <div class="w-12 h-12 rounded bg-orange-200 hover:bg-orange-300 transition transition-500 flex items-center justify-center cursor-pointer mr-4">
                                <svg fill="none" height="20" viewBox="0 0 13 13" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_244_218)">
                                        <path d="M8.08372 2.1907L10.7282 4.83517L4.03427 11.5291L1.39128 8.88464L8.08372 2.1907ZM12.7349 1.55291L11.5555 0.37357C11.0998 -0.0822055 10.3597 -0.0822055 9.90235 0.37357L8.77265 1.50326L11.4171 4.14776L12.7349 2.83003C13.0884 2.47651 13.0884 1.90641 12.7349 1.55291ZM0.007359 12.6017C-0.0407674 12.8182 0.154786 13.0123 0.371404 12.9597L3.31825 12.2452L0.675254 9.60069L0.007359 12.6017Z"
                                              fill="#383738"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_244_218">
                                            <rect fill="white" height="13" width="13"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </router-link>
                        <div @click="deleteProduct(product.id, index)"
                             class="w-12 h-12 rounded bg-red-200 hover:bg-red-300 transition transition-500 flex items-center justify-center cursor-pointer">
                            <svg fill="none" height="20" viewBox="0 0 13 13" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.41754 0.784729H7.59023V1.15031H8.37486V0.733551C8.37495 0.329086 8.04607 0 7.6418 0H5.36597C4.9617 0 4.63281 0.329086 4.63281 0.733551V1.15031H5.41754V0.784729Z"
                                      fill="#383738"/>
                                <path d="M10.1868 4.25928H2.8207C2.61887 4.25928 2.45998 4.43146 2.47624 4.6327L3.09207 12.2475C3.12638 12.6726 3.48096 13 3.90695 13H9.10042C9.52641 13 9.88098 12.6726 9.9153 12.2474L10.5311 4.6327C10.5475 4.43146 10.3886 4.25928 10.1868 4.25928ZM4.6043 12.1878C4.59606 12.1883 4.58783 12.1886 4.5797 12.1886C4.37399 12.1886 4.20132 12.0284 4.18852 11.8203L3.80261 5.56898C3.78932 5.35266 3.95386 5.1665 4.17008 5.15321C4.3856 5.14011 4.57256 5.30426 4.58585 5.52068L4.97167 11.772C4.98506 11.9883 4.82051 12.1744 4.6043 12.1878ZM6.90046 11.7962C6.90046 12.0128 6.72481 12.1885 6.5081 12.1885C6.29138 12.1885 6.11573 12.0128 6.11573 11.7962V5.54478C6.11573 5.32806 6.29138 5.15241 6.5081 5.15241C6.72471 5.15241 6.90046 5.32806 6.90046 5.54478V11.7962ZM9.20486 5.56789L8.8364 11.8192C8.8242 12.0277 8.65122 12.1885 8.44512 12.1885C8.43739 12.1885 8.42955 12.1883 8.42172 12.1879C8.2054 12.1751 8.04036 11.9894 8.05316 11.7731L8.42152 5.52167C8.43421 5.30535 8.61929 5.14031 8.8362 5.15311C9.05252 5.1658 9.21755 5.35157 9.20486 5.56789Z"
                                      fill="#383738"/>
                                <path d="M11.5438 3.04848L11.2861 2.27605C11.2182 2.07243 11.0276 1.93506 10.8128 1.93506H2.19499C1.98036 1.93506 1.78963 2.07243 1.72179 2.27605L1.46411 3.04848C1.41442 3.19745 1.47909 3.3494 1.59979 3.42517C1.64899 3.45602 1.70721 3.47456 1.77118 3.47456H11.2367C11.3007 3.47456 11.359 3.45602 11.4081 3.42507C11.5288 3.3493 11.5935 3.19735 11.5438 3.04848Z"
                                      fill="#383738"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-8" v-if="products && products.links.length > 3">
                    <div class="flex flex-wrap -mb-1">
                        <div :key="p" v-for="(link, p) in products.links">
                            <div @click="getAllProducts(link.label)"
                                 class="mr-1 mb-1 px-3 py-2 text-xs h-full leading-4 border-transparent border hover:border-gray-300 font-bold hover:bg-white focus:border-indigo-500 focus:text-indigo-500 cursor-pointer"
                                 style="font-size: .85rem;" v-html="link.label" v-if="parseInt(link.label) && !link.active"></div>
                            <div class="mr-1 mb-1 px-3 py-2 text-xs h-full leading-4 border-transparent border bg-ins-2  font-bold"
                                 style="font-size: .85rem;"
                                 v-html="link.label" v-if="parseInt(link.label) && link.active">
                            </div>
                        </div>
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
        name: "Index",
        data() {
            return {
                server: API_URL,
                isLoading: true,
                products: Array,
                page: 1,
            }
        },
        mounted() {
            this.getAllProducts(1);
        },
        methods: {
            getAllProducts(page) {
                axios.get(this.server + 'api/getAllProducts?page=' + page).then(response => {
                    this.products = response.data;
                    this.isLoading = false;
                }).catch(function (error) {
                    console.log(error.toJSON());
                });
            },

            deleteProduct(id, index) {
                if (confirm('Delete product?') === true) {
                    axios.delete(this.server + 'api/deleteProduct/' + id).then(() => {
                        this.products.data.splice(index, 1);
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>