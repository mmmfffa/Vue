<template>
  <div>
    <h1>个人信息</h1>
<!--    组件在没有添加props属性的情况下-->
    {{ $route.params.id }}
<!--    组件添加props属性的情况-->
    {{id}}

  </div>
</template>

<script>
export default {
  name: "userProfile",
  props:['id'],
  //拦截器  chain
  beforeRouteEnter:(to, from, next)=>{
     console.log("进入路由前");
     next(vm => {
       vm.getData();//进入之前执行此方法
     });
  },
  beforeRouteLeave:(to, from, next) =>{
     console.log("进入路由后");
     next();
  },
  methods: {
    getData:function (){
       this.axios({
         method:"get",
         url:"http://localhost:8080/static/mock/data.json"
       }).then(function (response){
         console.log(response);
    });
    }
  }

}

</script>

<style scoped>

</style>
