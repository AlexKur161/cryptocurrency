<template>
<div class="wrap-title-task" v-bind="rr">
  <router-link to="/todos">Перейти к списку</router-link>
    <div class="change-content">
    <p v-if="showTitle" class="title-task">{{filt.title}}</p>
    <textarea type="text" v-else-if="!showTitle" v-model="filt.title" class="title-task-inp" />
    <button class="btn-showinp" @click="test">&#9998;</button>
    </div>
    </div>
</template>
<script>


export default {

    data(){
        return{
            todosNew:[],
            filt:"",
            deleteItem: "",
            showTitle:true
        }
    },
    mounted(){
   if (localStorage.getItem('todos')) {
      this.todosNew = JSON.parse(localStorage.getItem('todos'));
    }
  },
   computed:{
     rr(){
         return this.todosNew.find((item) => {
          if(item.id == this.$route.params.id){
            return this.filt = {...item}
          }
     })
        }
     },
     methods:{
      test(){
        this.showTitle = !this.showTitle
        const tt = this.todosNew.findIndex(numb => numb.id == this.filt.id)
        this.todosNew[tt] = this.filt
        const parsed = JSON.stringify(this.todosNew);
        localStorage.setItem('todos', parsed);
      }
     }
  }

</script>
<style scoped>
button{
    color: #fff;
    background: #007BFF;
    border: none;
    border-radius: 90px;
    font-size: 18px;
    cursor: pointer;
}
.change-content{
  position: relative;
   width: fit-content; 
  margin: auto;
}
.btn-showinp{
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 2px 6px;
} 
.title-task{
  margin-top: 30px;
  color: #000;
  font-size: 18px;
  margin-right: 30px;
  padding-top: 20px;
}
.wrap-title-task{
  padding: 0px 20px;
}
.title-task-inp{
  width: 80vw;
  height: 40vh;
  padding:30px;
  font-size: 18px;
   margin-top: 30px;
}
.title-task-inp:focus{
  outline: none;
}
@media(max-width:500px){
  .title-task{
  text-align: start;
  width: auto;
}
.title-task-inp{
   width: 80vw;
  min-height: 60vh;
  padding:10px;
  margin-top: 40px;
}
}
</style>
