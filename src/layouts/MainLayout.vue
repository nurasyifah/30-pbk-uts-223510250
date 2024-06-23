<template>
  <q-layout view="lHr lpR lfr">
    <q-header class="bg-pink text-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title> UAS-PBK-223510250 </q-toolbar-title>
        <q-tabs align="left">
          <q-route-tab to="/" label="porch" />
          <q-route-tab to="/todos" label="todolist" />
          <q-route-tab to="/posts" label="posts" />
          <q-route-tab to="/albums" label="albums" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <RouterView />
    </q-page-container>

    <q-footer class="bg-pink text-black footer-center" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="footer-text">
          &copy; Copy right by ChocoCip
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { RouterView } from 'vue-router';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const yOffset = -50; 
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
</script>

<style scoped>
.q-toolbar {
  padding: 0 75px !important;
  font-family: 'Lucida Calligraphy', sans-serif;
}

.q-toolbar__title:first-child {
  padding-left: 32px !important;
}

.q-tab {
  padding: 0 20px !important;
  min-height: 75px !important;
}

.footer-center .footer-text {
  font-size: 12px !important; 
  text-align: center;
  width: 100%;
}

.bg-pink {
  background-color: #FDB0C0 !important;
}
</style>
