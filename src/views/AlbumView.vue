<template>
  <h1>Albums - UAS</h1>
  <h2>by @nurasyifah_</h2><br>
  <q-page class="q-pa-md">
    <q-spinner v-if="isLoading" size="lg" color="primary" />
    <div v-else class="photo-grid">
      <q-img
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.thumbnailUrl"
        :alt="photo.title"
        class="cursor-pointer"
        @click="selectPhoto(photo.id)"
        :style="photo.style"
      ></q-img>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const photos = ref([]);
const isLoading = ref(false);

const fetchPhotos = async (albumId = 1) => {
  try {
    isLoading.value = true;
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const data = await response.json();
    photos.value = data.map((photo) => ({
      id: photo.id,
      thumbnailUrl: photo.thumbnailUrl,
      url: photo.url,
      title: photo.title,

    }));
  } catch (error) {
    console.error("Error fetching photos:", error);
  } finally {
    isLoading.value = false;
  }
};

const selectPhoto = (photoId) => {
  router.push({ path: `/albums/${photoId}` });
};

onMounted(() => {
  fetchPhotos();
});
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
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
</style>
