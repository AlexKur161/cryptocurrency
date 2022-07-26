<template>
<div>
     <transition-group name="flip-list" tag="ul">
        
       <todoItem
       v-for="(todo, index,) in todos"
       :key="todo.id"
       :todos="todos"
       :todo="todo"
       :index="index"
       v-on:remove-todo="removeTodo"
       @save-local="saveLocal"
       @show-vis="showVis"
         />
   </transition-group>
</div>
</template>
<script>
import todoItem from "@/components/todoItem"
export default{
    props:["todos"],
    components:{
        todoItem
    },
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo',id)
        },
        saveLocal(){
            this.$emit('save-local')
        },
     showVis() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    }
    }
}
</script>
<style scoped>
ul{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.flip-list-move {
  transition: transform 0.8s ease;
}
</style>