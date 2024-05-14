<template>
    <div class="header">
      <nav>
        <ul>
          <li @click="handleMenu('todos')">todos</li>
          <li @click="handleMenu('posts')">posts</li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleMenu(menu) {
        this.$emit('menu-click', menu);
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #fff;
    color: skyblue;
    display: flex;
    justify-content: center; 
    align-items: center; 
  }
  
  nav ul {
    list-style-type: none;
    display: flex;
  }
  
  nav ul li {
    padding: 10px;
    cursor: pointer;
  }
  
  nav ul li:hover {
    background-color: #555;
  }
  </style>
  
  