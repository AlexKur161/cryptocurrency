<template>
    <form @submit.prevent='sub'> 
        <input placeholder="Введите заметку" class="create-task" v-model="title" type="text">
        <input class="create-task-btn" @click='sub' type="button" value="Добавить" :disabled="dis()">
        <p class="info-txt" v-if="addText">Введите пожалуйста название в поле</p>
    </form>
</template>
<script>
export default{
    props:["todos"],
    data(){
        return {
            title:"",
            addText:false
        }
    },
methods:{
    sub(){ 
       const newTodo = {
        id: Date.now(),
        title: this.title,
        completed: false,
        show: false
       }
       if(newTodo.title === ""){
        this.addText = true
       }else{
       this.$emit("sub-item", newTodo)
       this.title = ""
       this.addText = false
       }
    },
    dis(){
        if(this.title == ""){
            return true
        }else{
            return false
        }
    }
}
}
 </script>
 <style scoped>
 form{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
 }
 </style>