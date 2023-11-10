<script setup lang="ts">
import { inject, PropType } from "vue";
import { Datum } from "../interfaces/data";

const props = defineProps({
  data: { type: Object as PropType<Datum>, required: true },
});

const getStatusStyle: Function = inject("statusStyles") ?? (() => {});

function showContactModal() {}
</script>

<template>
  <div class="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion" />
    <h1 class="text-xl font-medium uppercase collapse-title">
      {{ props.data.comp.name }}
      <span
        :class="'ml-2 badge badge-' + getStatusStyle(props.data.comp.status)"
        >{{ props.data.comp.status }}
      </span>
    </h1>
    <div class="flex flex-col gap-4 collapse-content">
      <ul>
        <li class="font-semibold" v-for="contact in data.people">
          {{ contact.name }}
          <span
            :class="'badge-' + getStatusStyle(contact.status)"
            class="ml-2 font-normal badge"
            >{{ contact.status }}
          </span>
        </li>
      </ul>

      <div class="flex flex-wrap justify-between gap-4">
        <button class="w-40 btn btn-accent" @click="showContactModal">
          🞣 Add contact
        </button>
        <div class="flex flex-wrap gap-4">
          <button
            class="w-44 btn btn-outline btn-error"
            v-if="props.data.people.length"
          >
            Remove contact
          </button>
          <button class="w-44 btn btn-outline btn-error">
            Delete this entry
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
