"use strict";(self["webpackChunklesvue"]=self["webpackChunklesvue"]||[]).push([[490],{490:function(t,o,e){e.r(o),e.d(o,{default:function(){return J}});var s=function(){var t=this,o=t._self._c;return o("div",{staticClass:"bord-select",on:{click:function(o){t.selected=!1}}},[o("router-link",{staticClass:"link-router",attrs:{to:"/"}},[t._v("Главная")]),o("addTodo",{attrs:{todos:t.todos},on:{"sub-item":t.subItem}}),o("select",{directives:[{name:"model",rawName:"v-model",value:t.sel,expression:"sel"}],staticClass:"switch-sel",class:{testselect:t.selected},on:{click:function(o){o.stopPropagation(),t.selected=!t.selected},change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){var o="_value"in t?t._value:t.value;return o}));t.sel=o.target.multiple?e:e[0]}}},[o("option",{attrs:{value:"all"}},[t._v("Все")]),o("option",{attrs:{value:"noCompleted"}},[t._v("В процессе")]),o("option",{attrs:{value:"completed"}},[t._v("Выполненные")])]),t.todos.length?o("todoList",{attrs:{todos:t.selectTodo},on:{"remove-todo":t.removeTodo,"save-local":t.saveLocal}}):o("p",[t._v("Заметок не найдено")])],1)},i=[],l=function(){var t=this,o=t._self._c;return o("div",[o("transition-group",{attrs:{name:"flip-list",tag:"ul"}},t._l(t.todos,(function(e,s){return o("todoItem",{key:e.id,attrs:{todos:t.todos,todo:e,index:s},on:{"remove-todo":t.removeTodo,"save-local":t.saveLocal,"show-vis":t.showVis}})})),1)],1)},a=[],n=function(){var t=this,o=t._self._c;return o("li",[o("span",{staticClass:"task",class:{line:t.todo.completed,showanimation:t.todo.show}},[o("div",{staticClass:"mini-wrap"},[o("p",[t._v(t._s(t.index+1))]),o("input",{attrs:{type:"checkbox"},domProps:{checked:t.check()},on:{change:function(o){t.todo.completed=!t.todo.completed,t.$emit("save-local")}}}),o("p",{staticClass:"title-task"},[t._v(t._s(t.todo.title))])]),t.show?o("div",{staticClass:"wrap-switch"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.title,expression:"todo.title"}],staticClass:"left-item",attrs:{type:"text"},domProps:{value:t.todo.title},on:{input:function(o){o.target.composing||t.$set(t.todo,"title",o.target.value)}}}),o("button",{staticClass:"right-item",on:{click:t.showVis}},[t._v(" ✓")])]):t._e(),o("button",{staticClass:"more",on:{click:function(o){return t.$router.push(`/todos/${t.todo.id}`)}}},[t._v("Подробнее")]),o("button",{staticClass:"btn-fix",on:{click:function(o){t.show=!t.show}}},[t._v("✎")]),o("button",{staticClass:"btn-remove",on:{click:function(o){t.$emit("remove-todo",t.todo.id),t.todo.show=!0}}},[t._v("×")])])])},d=[],c=function(){var t=this,o=t._self._c;return o("p",{staticClass:"title-task"},[t._v(t._s(t.todo.title))])},r=[],u={props:["todo"]},p=u,m=e(1),v=(0,m.Z)(p,c,r,!1,null,null,null),h=v.exports,f=e(64),_={props:["todo","todos","index","showTas"],data(){return{show:!1}},components:{contentTask:h,contentTodo:f.Z},methods:{check(){return 1==this.todo.completed||0!=this.todo.completed&&void 0},showVis(){this.$emit("show-vis"),this.show=!1}}},w=_,k=(0,m.Z)(w,n,d,!1,null,"78aa1590",null),g=k.exports,b={props:["todos"],components:{todoItem:g},methods:{removeTodo(t){this.$emit("remove-todo",t)},saveLocal(){this.$emit("save-local")},showVis(){const t=JSON.stringify(this.todos);localStorage.setItem("todos",t)}}},x=b,C=(0,m.Z)(x,l,a,!1,null,"f51cf496",null),T=C.exports,y=function(){var t=this,o=t._self._c;return o("form",{on:{submit:function(o){return o.preventDefault(),t.sub.apply(null,arguments)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"create-task",attrs:{placeholder:"Введите заметку",type:"text"},domProps:{value:t.title},on:{input:function(o){o.target.composing||(t.title=o.target.value)}}}),o("input",{staticClass:"create-task-btn",attrs:{type:"button",value:"Добавить",disabled:t.dis()},on:{click:t.sub}}),t.addText?o("p",{staticClass:"info-txt"},[t._v("Введите пожалуйста название в поле")]):t._e()])},$=[],I={props:["todos"],data(){return{title:"",addText:!1}},methods:{sub(){const t={id:Date.now(),title:this.title,completed:!1,show:!1};""===t.title?this.addText=!0:(this.$emit("sub-item",t),this.title="",this.addText=!1)},dis(){return""==this.title}}},S=I,L=(0,m.Z)(S,y,$,!1,null,"2da6ccc5",null),N=L.exports,Z={name:"app",data(){return{todos:[{id:187317319723,title:"Пример",completed:!1,show:!1}],sel:"all",selected:!1}},mounted(){localStorage.getItem("todos")&&(this.todos=JSON.parse(localStorage.getItem("todos")))},computed:{selectTodo(){return"all"===this.sel?this.todos:"noCompleted"===this.sel?this.todos.filter((t=>!t.completed)):"completed"===this.sel?this.todos.filter((t=>t.completed)):void 0}},components:{todoList:T,addTodo:N},methods:{removeTodo(t){setTimeout((()=>{this.todos=this.todos.filter((o=>o.id!==t)),this.saveTodo()}),1e3)},subItem(t){this.todos.push(t),this.saveTodo()},saveTodo(){const t=JSON.stringify(this.todos);localStorage.setItem("todos",t)},saveLocal(){this.saveTodo()}}},P=Z,V=(0,m.Z)(P,s,i,!1,null,null,null),J=V.exports}}]);
//# sourceMappingURL=490.43ed5bb0.js.map