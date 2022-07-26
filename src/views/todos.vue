<template>
  <div class="bord-select" @click="selected = false">
    <router-link class="link-router" to="/">Главная</router-link>
    <addTodo 
    v-bind:todos="todos"
    @sub-item="subItem"
    />
    <select :class="{testselect:selected}" @click.stop="selected = !selected" class="switch-sel" v-model="sel">
        <option  value="all">Все</option>
        <option  value="noCompleted">В процессе</option>
        <option  value="completed">Выполненные</option>
    </select>
    <todoList
    v-if="todos.length" 
    v-bind:todos="selectTodo"
    @remove-todo="removeTodo"
    @save-local="saveLocal"
     />
     <p v-else>Заметок не найдено</p>
  </div>
</template>

<script>
import todoList from "@/components/todoList.vue"
import addTodo from "@/components/addTodo.vue"
export default {
  name: 'app',
  data() {
    return {
      todos:[{id:187317319723,title:"Пример",completed:false, show:false}],
      sel:'all',
      selected:false
    }
  },
  mounted(){
   if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  },
  computed:{
    selectTodo(){
        if(this.sel === 'all'){
          return  this.todos
        }
        if(this.sel === 'noCompleted'){
          return  this.todos.filter(item => !item.completed)
        }
         if(this.sel === 'completed'){
          return  this.todos.filter(item => item.completed)
        }
    }
  },
  components: {
    todoList,
    addTodo
  },
  methods:{
    removeTodo(id){
      setTimeout( () => {
        this.todos = this.todos.filter(item => item.id !== id)
        this.saveTodo()
      }, 1000)
    },
    subItem(newTodo){
      this.todos.push(newTodo)
      this.saveTodo()
    },
    saveTodo() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    },
    saveLocal(){
      this.saveTodo()
    }
  }
  
}
</script>
