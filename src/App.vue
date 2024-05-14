<template>
  <div class="app">
    <Header @menu-click="handleMenuClick" />
    
    <div v-if="activeMenu === 'todos'">
      <Todos :todos="todos" />
    </div>

    <div v-else-if="activeMenu === 'posts'">
      <Posts :posts="posts" :users="users" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Todos from './components/Todos.vue';
import Posts from './components/Posts.vue';

export default {
  components: {
    Header,
    Todos,
    Posts
  },
  data() {
    return {
      activeMenu: 'todos', // Default menu aktif adalah Todos
      todos: [], // Data todos Anda
      posts: [], // Data postingan Anda
      users: [] // Data user Anda
    }
  },
  methods: {
    handleMenuClick(menu) {
      this.activeMenu = menu;
    }
  },
  mounted() {
    // Ambil data todos dari sumber Anda (misalnya API)
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.todos = json);

    // Ambil data postingan dari sumber Anda (misalnya API)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.posts = json);

    // Ambil data user dari sumber Anda (misalnya API)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.users = json);
  }
}
</script>

<style>
.app {
  padding: 20px;
}
</style>
