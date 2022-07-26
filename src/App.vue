<template>
  <div id="app">
    <headerNew> </headerNew>
    <router-view />
  </div>
</template>

<script>
import headerNew from "@/components/headerNew.vue"

export default{
  components:{
    headerNew
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  padding: 0px;
  margin: 0px;
}
.bord-select{
  min-height: 80vh;
}
.line{
   opacity: 0.5;
}
.showanimation {
  -webkit-animation: disappearance 4s linear;
          animation: disappearance 4s linear;
}
ul{
  padding-left: 0px;
}
@-webkit-keyframes disappearance {
  from {
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
  }
  25% {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

@keyframes disappearance {
  from {
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
  }
  25% {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
   }
.link-router{
    display: block;
    margin: auto;
    margin-bottom: 30px;
    width: fit-content;
}
body {
  background: aliceblue;
}
.switch-sel{
  height: 30px;
    color: white;
    background: #007bff;
    border: none;
    padding: 0 5px;
    appearance: none;
  width: 160px;
    text-align: center;
    border-radius: 15px;
     font-size: 16px;
     margin-bottom: 30px;
     
}
.switch-sel:focus{
  border:none;
  outline: none;
 
}
.switch-sel:active{
  border:none;
  outline: none;
}
.testselect{
 border-radius: 15px 15px 0px 0px;
}
.create-task{
   margin: auto 0;
    border-radius: 20px;
    border: none;
    height: 38px;
    font-size: 16px;
    color: #000;
    background: #ffffff;
    padding-left: 20px;
   
}
.create-task:focus{
  border: none;
  outline: none;
}
.create-task-btn{
  width: 140px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.create-task-btn:hover {
  background-color: #007bff;
  box-shadow: 0px 15px 20px #007bffab;
  color: #fff;
  transform: translateY(-7px);
}
.create-task-btn:disabled{
  opacity: 0.5;
}
input::-webkit-input-placeholder {
  color:#000;
}
input:-moz-placeholder {
  color:#000;
}
option{
  border-radius: 20px;
}
.header{
  width: 100%;
  height: 100px;
  background: #007bff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.header-title{
  color:#fff;
}
.info-txt{
  width: 100%;
}
@media(max-width:500px){
.title-task{
  widows: 90px;
}
.task{
  gap: 10px;
}
}

@media(max-width:400px){
input::-webkit-input-placeholder {
  text-align: center;
}
input:-moz-placeholder {
  text-align: center;
}
.create-task{
     width: 230px;
    padding: 0px 20px;
    box-sizing: border-box;
}
.create-task-btn{
  width: 230px;
}
}
</style>
