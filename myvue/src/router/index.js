import Vue from 'vue';
import VueRouter from "vue-router";
import content from "../components/content";
import Main from "../components/Main";
import mafu from "../components/mafu";
//安装路由
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
  routes: [
    {
      //路由路径
      path: '/content',
      name: 'content',
      //跳转的组件
      component: content
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/mafu',
      name: 'mafu',
      component: mafu
    }
  ]
});
