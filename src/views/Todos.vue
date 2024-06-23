<template>
  <div>
    <h1 class="mt-3 text-center">{{ title }}</h1>
    <h2 class="mt-3 text-center">{{ subtitle }}</h2>
    <div class="container">
      <slot name="before-inputs"></slot>
      <div class="row justify-content-center">
        <div class="col-9 mt-5">
          <div class="row">
            <div class="col-2">
              <input type="text" class="form-control" placeholder="start time" v-model="startTime">
            </div>
            <div class="col-2">
              <input type="text" class="form-control" placeholder="end time" v-model="endTime">
            </div>
            <div class="col-5">
              <input type="text" class="form-control" placeholder="new activity" v-model="activity">
            </div>
            <div class="col-2">
              <button class="btn btn-primary form-control" @click="addTodo">add activity</button>
            </div>
          </div>
        </div>
      </div>
      <slot name="after-inputs"></slot>
      <div class="row justify-content-center">
        <div class="col-10 mt-5">
          <div v-for="(item, index) in filteredTodoList" :key="index" class="p-3" style="border-bottom: solid 1px #ddd;">
            <div class="btn-actions">
              <button class="btn btn-outline-danger me-3" @click="deleteTodo(index)">cancel</button>
              <button class="btn btn-success me-3" @click="markAsDone(index)">done</button>
              <input type="checkbox" v-model="item.done">
              <span :class="{ 'done-item': item.done }">{{item.start}} - {{item.end}} : {{item.text}}</span>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary mt-3" @click="showIncomplete = !showIncomplete" style="margin-top: 10px;">
        {{ showIncomplete ? 'show all list' : 'list not completed' }}
      </button>
      <slot name="after-list"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useTodoStore } from "../stores/todos";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();
const { todos, hideCompleted, filteredTodos } = storeToRefs(todoStore);
const { removeTodo, toggleHideCompleted } = todoStore;

const props = defineProps({
  title: {
    type: String,
    default: 'To Do List App - UTS'
  },
  subtitle: {
    type: String,
    default: 'My Activity Schedule @nurasyifah_'
  }
});

const startTime = ref('');
const endTime = ref('');
const activity = ref('');
const showIncomplete = ref(false);

const addTodo = () => {
  let newItem = {
    text: activity.value,
    start: startTime.value,
    end: endTime.value,
    done: false
  };
  todos.value.push(newItem);
  activity.value = '';
  startTime.value = '';
  endTime.value = '';
};

const deleteTodo = (index) => {
  todos.value.splice(index, 1);
};

const markAsDone = (index) => {
  todos.value[index].done = true;
};

const filteredTodoList = computed(() => {
  if (showIncomplete.value) {
    return todos.value.filter(item => !item.done);
  } else {
    return todos.value;
  }
});

const handleSubmit = () => {
  if (activity.value.trim()) {
    addTodo();
  }
};

watch(
  todos,
  (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  },
  { deep: true }
);
</script>

<style>
body {
  background-color: skyblue;
}

body, h1, h2, p, input, button {
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
}

h1 {
  font-size: 2.5rem; 
  text-decoration: underline;
}

h2 {
  font-size: 1.75rem; 
}

.container {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66667%;
  padding-left: 15px;
  padding-right: 15px;
}

.col-5 {
  flex: 0 0 auto;
  width: 20%;
  padding-left: 15px;
  padding-right: 15px;
}

.col-9 {
  flex: 0 0 auto;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333%;
  padding-left: 15px;
  padding-right: 15px;
}

.mt-5 {
  margin-top: 3rem !important;
}

.text-center {
  text-align: center;
}

.form-control {
  display: block;
  text-align: center;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-outline-danger {
  color: #dc3545;
  background-color: transparent;
  background-image: none;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.p-3 {
  padding: 1rem !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.btn-actions {
  display: flex;
  align-items: center;
}

.btn-actions > * {
  margin-right: 10px; 
}

.done-item {
  text-decoration: line-through; 
  color: black; 
}

.btn-primary {
  background-color: skyblue;
  border-color: skyblue;
}

.form-control {
  background-color: skyblue;
}
</style>
