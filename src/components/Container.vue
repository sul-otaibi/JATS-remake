<script setup lang="ts">
import { onBeforeMount, provide, reactive, ref } from "vue";
import Card from "./Card.vue";
import type { Data } from "../interfaces/data";
import defaults from "../assets/defaults";
import AddEntryModal from "./AddEntryModal.vue";

var data = reactive<Data>(defaults);
const childrenData = data.data;
const statusStyles = ref(data.statusStyles);

function getStatusStyle(s: keyof typeof statusStyles.value) {
  return statusStyles.value[s];
}

provide("statusStyles", getStatusStyle);

onBeforeMount(() => {
  // if there is no data to load
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(data));
  }

  const parsedData = JSON.parse(localStorage.getItem("data") ?? "");
  data = reactive(parsedData);
});
</script>

<template>
  <span class="hidden">
    <!-- 
    This span fixes a wired bug where the colors of the 
    badges do not load unless they are used in advance. 
    -->
    <span class="badge badge-neutral"></span>
    <span class="badge badge-success"></span>
    <span class="badge badge-warning"></span>
    <span class="badge badge-error"></span>
  </span>

  <section class="flex flex-col gap-4">
    <template v-for="data in childrenData">
      <Card :data="data" />
    </template>
  </section>

  <AddEntryModal />
</template>
