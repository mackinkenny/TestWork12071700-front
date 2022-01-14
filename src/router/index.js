import Vue from "vue";
import VueRouter from "vue-router";

//components
import Welcome from "../components/HelloWorld";
import Products from "../components/Products/Index";
import Create from "../components/Products/Create";
import Edit from "../components/Products/Edit";
import Show from "../components/Products/Show";

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'welcome', component: Welcome},

    //products
    { path: '/products', name: 'products', component: Products},
    { path: '/create', name: 'products/create', component: Create},
    { path: '/edit/:id', name: 'products/edit', component: Edit, props: true},
    { path: '/show/:id', name: 'products/show', component: Show, props: true},
]

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;