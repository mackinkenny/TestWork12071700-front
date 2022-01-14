<template>
    <div id="app">
        <div class="container">
            <div class="grid grid-cols-6">
                <div class="col-span-1 min-h-screen bg-gray-100 py-10 px-3">
                    <div class="flex items-center justify-center">
                        <img alt="Vue logo" class="w-16" src="./assets/logo.png">
                    </div>
                    <div class="mt-20">
                        <router-link
                                :to="{
              name: 'welcome',
            }">
                            <div class="bg-white hover:bg-blue-200 transition transition-500 font-medium text-lg px-4 py-2 rounded cursor-pointer">
                                Home
                            </div>
                        </router-link>
                        <router-link
                                :to="{
              name: 'products',
            }">
                            <div class="bg-white hover:bg-blue-200 transition transition-500 font-medium text-lg px-4 py-2 rounded cursor-pointer mt-1">
                                Products
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-span-5 p-5">
                    <router-view/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

