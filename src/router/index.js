import Vue from "vue";
import VueRouter from "vue-router";
import Msite from "../views/Msite/Msite.vue";
import Search from "../views/Search/Search.vue";
import Profile from "../views/Profile/Profile.vue";
import Shop from "../views/Shop/Shop.vue";
import Login from "../views/Login/Login.vue";
import Order from "../views/Order/Order.vue";
import ShopGoods from "../views/ShopGoods.vue";
import ShopRatings from "../views/ShopRatings.vue";
import ShopSeller from "../views/ShopSeller.vue";

Vue.use(VueRouter);

 
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

export default new VueRouter ({
  routes : [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/",
    redirect: '/msite'
   
    
  },
  {
    path: "/msite",
    name: "Msite",
    component: Msite,
    meta:{
      showFooter:true
    }
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta:{
      showFooter:true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta:{
      showFooter:true
    }
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    meta:{
      showFooter:true
    }
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
    children:[
      {
      path: "shopgoods",
      name: "ShopGoods",
      component: ShopGoods,
      },
      {
        path: "shopratings",
        name: "ShopRatings",
        component: ShopRatings,
        },
        {
          path: "shopseller",
          name: "ShopSeller",
          component: ShopSeller
          }
  ]
}]
})
