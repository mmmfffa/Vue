import Vue from 'vue';
import VueRouter from "vue-router";

import Main from "../views/Main";
import Login from "../views/Login";
import userProfile from "../views/user/Profile";
import userList from "../views/user/List";
import NotFound from "../views/NotFound";
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes:[
      {
        path: '/Main',
        name: 'Main',
        component: Main,//嵌套路由
        children: [
          {
            path: '/user/Profile/:id',
            name: 'userProfile',//name需要添加引号因为是字符串
            component: userProfile,
            props:true
          },
          {
            path: '/user/List',
            name: 'userList',
            component: userList
          },
          {
            path: '/goHome',
            redirect: '/Main'
          }
        ]
      },
      {
        path: '/Login',
        name: 'Login',
        component: Login
      },
      {
        path: '*',
        name: 'NotFound',
        component: NotFound
      }
    ]
});
