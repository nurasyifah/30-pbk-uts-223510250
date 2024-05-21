<template>
  <div class="header">
    <nav>
      <ul>
        <slot name="menu-items">
          <li @click="handleMenu('todos')">{{ todoLabel }}</li>
          <li @click="handleMenu('posts')">{{ postLabel }}</li>
        </slot>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  todoLabel: {
    type: String,
    default: 'todos'
  },
  postLabel: {
    type: String,
    default: 'posts'
  }
});

const emit = defineEmits(['menu-click']);

const handleMenu = (menu) => {
  emit('menu-click', menu);
};
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
