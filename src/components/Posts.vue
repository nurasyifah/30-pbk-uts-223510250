<template>
    <div class="posts">
      <select v-model="selectedUser" class="user-select">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
  
      <ul v-if="selectedUser" class="post-list">
        <li v-for="post in filteredPosts" :key="post.id" class="post-item">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['posts', 'users'],
    data() {
      return {
        selectedUser: null
      }
    },
    computed: {
      filteredPosts() {
        if (!this.selectedUser) return [];
        return this.posts.filter(post => post.userId === this.selectedUser);
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #333;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
  }
  
  nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center; 
    align-items: center; 
  }
  
  nav ul li {
    padding: 10px;
    cursor: pointer;
  }
  
  nav ul li:hover {
    background-color: #555;
  }
  
  .posts {
    margin-top: 60px; 
  }
  
  .user-select {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .post-list {
    list-style-type: none;
    padding: 0;
  }
  
  .post-item {
    background-color: #f9f9f9;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .post-item h3 {
    margin-bottom: 5px;
    font-size: 18px;
    color: #333;
  }
  
  .post-item p {
    color: #666;
  }
  </style>
  
  