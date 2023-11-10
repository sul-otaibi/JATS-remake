<script setup lang="ts">
import { ref } from "vue";
const contactDetailsForm = ref(false);

function addEntry(e: MouseEvent) {
  my_modal.close();
  setTimeout(() => {
    contactDetailsForm.value = false;
  }, 300);
  console.log(e);
}

function addContact() {
  contactDetailsForm.value = true;
}
</script>
<template>
  <button
    class="lg:absolute right-5 3xl:right-0 btn btn-primary"
    onclick="my_modal.showModal()"
  >
    🞣 Add entry
  </button>
  <dialog id="my_modal" class="modal">
    <div class="modal-box">
      <form v-on:submit.prevent="">
        <div class="form-control">
          <label class="label label-text">Company name</label>
          <input
            type="text"
            placeholder="Apple Inc."
            class="input input-bordered"
            name="company"
          />
        </div>
        <div class="form-control">
          <label class="label label-text">Contact name</label>
          <input
            type="text"
            placeholder="Sultan"
            class="input input-bordered"
            name="contact name"
          />
        </div>
        <template v-if="!contactDetailsForm">
          <button class="w-full mt-2 btn btn-accent" @click="addContact">
            Add contact details
          </button>
          <span class="w-full italic text-center text-neutral"
            >You can add contacts later</span
          >
        </template>
        <template v-if="contactDetailsForm">
          <div class="form-control">
            <label class="label label-text">Contact phone</label>
            <input
              type="text"
              placeholder="0500000000"
              class="input input-bordered"
              name="contact name"
            />
          </div>
          <div class="form-control">
            <label class="label label-text">Contact email</label>
            <input
              type="text"
              placeholder="example@example.com"
              class="input input-bordered"
              name="contact name"
            />
          </div>
          <div class="form-control">
            <label class="label label-text">Contact linkedin</label>
            <input
              type="text"
              placeholder="www.linkedin.com/"
              class="input input-bordered"
              name="contact name"
            />
          </div>
          <div class="form-control">
            <label class="label label-text">Additional information</label>
            <textarea
              name="additional_info"
              rows="2"
              class="textarea textarea-bordered"
            ></textarea>
          </div>
        </template>

        <button
          class="w-full mt-10 btn btn-primary"
          @click="(event:MouseEvent) => addEntry(event)"
        >
          🞣 ADD
        </button>
      </form>

      <form method="dialog">
        <button class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
          ✕
        </button>
      </form>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
