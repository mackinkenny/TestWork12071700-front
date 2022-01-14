<template>
    <section>
        <div class="h-40 flex items-center font-bold pl-5">
            <p class="text-2xl font-bold">Create product</p>
        </div>
        <div class="w-full rounded-3xl p-5">
            <div class="flex">
                <div class="w-full md:w-4/12">
                    <form @submit.prevent="submit">
                        <div>
                            <label class="" for="name">Name</label>
                            <input class="mt-3 rounded-lg w-full h-12" id="name" name="name" required
                                   style="background: #f5f5f5; border: 1px solid rgba(0,0,0,0.1);"
                                   type="text" v-model="name">
                        </div>
                        <div class="mt-5">
                            <label class="" for="desc">Description</label>
                            <textarea class="mt-3 rounded-lg w-full" id="desc" name="desc"
                                      required rows="5" style="background: #f5f5f5; border: 1px solid rgba(0,0,0,0.1);" v-model="desc"></textarea>
                        </div>
                        <div class="mt-5">
                            <label for="image">Image</label>
                            <input accept="image/png, image/gif, image/jpeg" class="mt-3 w-full" id="image" required
                                   style="background: #f5f5f5; border: 1px solid rgba(0,0,0,0.1);" type="file">
                        </div>
                        <div class="mt-5">
                            <button class="rounded-lg py-2 px-3 font-bold bg-green-400 hover:bg-green-500 transition transition-500 text-white">
                                Create new
                            </button>
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
        name: "Create",
        data: function () {
            return {
                server: API_URL,
                name: '',
                desc: '',
            }
        },
        methods: {
            submit() {
                let formData = new FormData();
                formData.append("name", this.name);
                formData.append("description", this.desc);
                formData.append("image", document.getElementById('image').files[0]);

                axios.post(this.server + 'api/storeProduct', formData).then(() => {
                    this.$router.push({name: 'products'})
                }).catch(function (error) {
                    console.log(error.toJSON());
                });
            }
        }
    }
</script>

<style scoped>

</style>