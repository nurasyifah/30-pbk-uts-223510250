<template>
  <h1>Album Detail</h1>
  <q-page class="q-pa-md">
    <q-spinner v-if="isLoading" size="lg" color="primary" />
    <q-card v-else-if="photo" class="q-pa-md q-card-custom">
      <q-img :src="photo.url" class="q-mb-md q-img-custom" :alt="photo.title" />
      <div class="q-title-custom">{{ photo.title }}</div>
      <q-btn @click="goBack" class="q-mt-md q-btn-custom">Back to albums</q-btn>
    </q-card>
    <div v-else class="q-card-custom">
      <p>Photo not found.</p>
      <q-btn @click="goBack" color="pink" class="q-mt-md q-btn-custom">Back to albums</q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const photo = ref(null);
const isLoading = ref(false);

const fetchPhoto = async (id) => {
  try {
    isLoading.value = true;
    console.log("Fetching photo with ID:", id); 
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const data = await response.json();
    if (!data.id) throw new Error("Photo not found");
    photo.value = data;
  } catch (error) {
    console.error("Error fetching photo:", error);
  } finally {
    isLoading.value = false;
  }
};

const goBack = () => {
  router.push("/albums");
};

onMounted(() => {
  const photoId = route.params.id;
  if (photoId) {
    fetchPhoto(photoId);
  } else {
    console.error("No photo ID provided in route params.");
  }
});
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: skyblue; 
}

.q-card-custom {
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
}

.q-img-custom {
  max-width: 100%;
  max-height: 80vh;
  object-fit: cover;
  border-radius: 8px;
}

.q-title-custom {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
}

.q-btn-custom {
  text-transform: none; 
  transition: background-color 0.3s ease;
  background-color: skyblue;
}

.q-btn-custom:hover {
  background-color: lightpink; 
}

h1 {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 40px;
  color: black;
  margin-bottom: 4px;
}
</style>
