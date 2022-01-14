<template>
    <section>
        <div class="h-28 flex items-center font-bold pl-5">
            <p class="text-2xl font-bold">Edit product</p>
        </div>
        <div class="w-full rounded-3xl p-5" v-if="!isLoading">
                <div class="flex">
                    <div class="w-full md:w-4/12">
                        <form  @submit.prevent="submit">
                            <div>
                                <img :src="product.image" alt="" class="w-32 h-32 w-full object-cover overflow-hidden">
                            </div>
                            <div class="mt-5">
                                <label class="" for="name">Name</label>
                                <input class="mt-3 rounded-lg w-full h-12" id="name" name="name" v-model="product.name" style="background: #f5f5f5; border: 1px solid rgba(0,0,0,0.1);"
                                       type="text" required>
                            </div>
                            <div class="mt-5">
                                <label class="" for="desc">Description</label>
                                <textarea class="mt-3 rounded-lg w-full" style="background: #f5f5f5; border: 1px solid rgba(0,0,0,0.1);" v-model="product.description" name="desc" id="desc" rows="5" required></textarea>
                            </div>
                            <div class="mt-5">
                                <label for="image">Image</label>
                                <input class="mt-3 w-full" style="background: #f5f5f5; border: 1px solid rgba(0,0,0,0.1);" id="image" type="file"  accept="image/png, image/gif, image/jpeg">
                            </div>
                            <div class="mt-5 flex">
                                <button class="rounded-lg py-2 px-3 font-bold bg-green-400 hover:bg-green-500 transition transition-500 text-white mr-5">
                                    Update
                                </button>
                                <div class="rounded-lg py-2 px-3 font-bold bg-orange-400 hover:bg-orange-500 transition transition-500 text-white cursor-pointer" @click="getProduct">
                                    Reset changes
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>
    import {API_URL} from "/src/constants";
    import axios from "axios";

    export default {
        name: "Edit",
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

            submit() {
                let formData = new FormData();
                formData.append("id", this.id);
                formData.append("name", this.product.name);
                formData.append("description", this.product.description);
                formData.append("image", document.getElementById('image').files[0]);

                axios.post(this.server + 'api/updateProduct', formData).then(() => {
                    this.$router.push({ name: 'products' })
                }).catch(function (error) {
                    console.log(error.toJSON());
                });
            }
        }
    }
</script>

<style scoped>

</style>