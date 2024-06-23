<template>
  <h1>User Posts - UAS</h1>
  <h2>by @nurasyifah_</h2><br>
  <div id="posts" class="app">
    <select v-model="selectedUser" @change="handleSelectChange">
      <option value="" disabled>Search user</option>
      <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
    </select>
    <div v-if="isLoading">
      <span class="loading-message">Loading posts...</span>
    </div>
    <div v-for="post in posts" :key="post.id" class="post">
      <h3><b>{{ post.title }}</b></h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const selectedUser = ref('');
const isLoading = ref(false);
const users = ref([]);
const posts = ref([]);

const fetchUser = async () => {
  try {
    isLoading.value = true;
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log('User yang di fetch:', data);
    users.value = data;
  } catch (error) {
    console.error('Error Fetch User:', error);
  } finally {
    isLoading.value = false;
  }
};

const fetchPosts = async () => {
  if (!selectedUser.value) return;
  isLoading.value = true;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + selectedUser.value);
    const data = await response.json();
    console.log('Post yang di fetch:', data);
    posts.value = data;
  } catch (error) {
    console.error('Error Fetch Post:', error);
  } finally {
    isLoading.value = false;
  }
};

const handleSelectChange = () => {
  if (!selectedUser.value) return;
  fetchPosts();
};

onMounted(() => {
  fetchUser();
});

watch(selectedUser, () => {
  posts.value = [];
  fetchPosts();
}, { immediate: true });
</script>

<style>
#posts {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Century', sans-serif;
  color: skyblue;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 40px;
  color: black;
  margin-bottom: 4px;
}

h2 {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;
  color: black;
  margin-bottom: 4px;
}

select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid skyblue;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

select:hover {
  background-color: skyblue;
}

.loading-message {
  display: block;
  text-align: center;
  color: skyblue;
  font-size: 18px;
  margin: 20px 0;
}

.post {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post h3 {
  color: #666;
  margin-bottom: 10px;
}

.post p {
  color: #666;
  line-height: 1.6;
}
</style>
