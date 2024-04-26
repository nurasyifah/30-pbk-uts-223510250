<template>
  <h1 class="mt-3 text-center">To Do List App - UTS</h1>
  <h2 class="mt-3 text-center">My Activity Schedule @nurasyifah_</h2>
  <div class="container">

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [
        { text: 'Learning Object-Oriented Programming', start: '09:00', end: '10:40', done: false },
        { text: 'Learning Computer Networking', start: '10:45', end: '12:25', done: false },
        { text: 'Learning Digital Electronics', start: '13:15', end: '14:55', done: false },
        { text: 'Learning Component-Based Programming', start: '07:15', end: '08:55', done: false },
        { text: 'Learning Computer Graphics Lab', start: '09:00', end: '10:40', done: false },
        { text: 'Learning Analysis and Design Algorithm', start: '10:45', end: '12:25', done: false },
        { text: 'Learning Computer Graphics', start: '15:00', end: '16:40', done: false },
        { text: 'Learning Human and Computer Interaction', start: '07:15', end: '09:45', done: false },
        { text: 'Learning Object-Oriented Programming Lab', start: '10:45', end: '12:25', done: false },
        { text: 'Learning Analysis and Design Algorithm Lab', start: '07:15', end: '08:55', done: false },
        { text: 'Learning Computer Networking Lab', start: '10:45', end: '12:25', done: false },
        { text: 'Learning Discrete Mathematics of Informatics', start: '13:15', end: '15:45', done: false },
        { text: 'Learning Digital Electronics Lab', start: '13:30', end: '15:10', done: false },
        { text: 'Learning Component-Based Programming Lab', start: '15:15', end: '16:55', done: false },
      ],
      startTime: '',
      endTime: '',
      activity: '',
      showIncomplete: false
    };
  },
  methods: {
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },
    markAsDone(index) {
      this.todoList[index].done = true;
    },
    addTodo() {
      let newItem = {
        text: this.activity,
        start: this.startTime,
        end: this.endTime,
        done: false
      };
      this.todoList.push(newItem);
      this.activity = '';
      this.startTime = '';
      this.endTime = '';
    }
  },
  computed: {
  filteredTodoList() {
    if (this.showIncomplete) {
      return this.todoList.filter(item => !item.done);
    } else {
      return this.todoList;
    }
  }
}
};
</script>

<style>
body {
  background-color: skyblue;
}

body, h1, h2, p, input, button {
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
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

h1 {
  text-decoration: underline;
}
</style>

