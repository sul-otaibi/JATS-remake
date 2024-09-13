<template>
  <div class="modal modal-open">
    <div class="modal-box relative">
      <button @click="$emit('close-form')" class="btn btn-sm btn-circle  absolute right-2 top-2">✕</button>
      <h2 class="text-2xl font-bold mb-4">{{ editMode ? 'Edit' : 'Add' }} Entry</h2>

      <form @submit.prevent="saveEntry">
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Company Name</span>
          </label>
          <input type="text" v-model="form.companyName" class="input input-bordered" required />
        </div>

        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Contact Method</span>
          </label>
          <div class="flex flex-col ml-1">
            <label class="cursor-pointer flex my-1">
              <input type="radio" v-model="form.contactMethod" value="email" class="radio radio-primary" />
              <span class="ml-2">Email</span>
            </label>
            <label class="cursor-pointer flex my-1">
              <input type="radio" v-model="form.contactMethod" value="website" class="radio radio-primary" />
              <span class="ml-2">Website</span>
            </label>
            <label class="cursor-pointer flex my-1">
              <input type="radio" v-model="form.contactMethod" value="linkedin job listing" class="radio radio-primary" />
              <span class="ml-2">LinkedIn Job Listing</span>
            </label>
            <label class="cursor-pointer flex my-1">
              <input type="radio" v-model="form.contactMethod" value="linkedin contact" class="radio radio-primary" />
              <span class="ml-2">LinkedIn Contact</span>
            </label>
          </div>
        </div>

        <div v-if="form.contactMethod === 'linkedin contact'" class="form-control mb-4">
          <label class="label">
            <span class="label-text">Contact Name</span>
          </label>
          <input type="text" v-model="form.contactName" class="input input-bordered" />
        </div>

        <div v-if="form.contactMethod === 'linkedin contact'" class="form-control mb-4">
          <label class="label">
            <span class="label-text">LinkedIn Profile URL</span>
          </label>
          <input type="url" v-model="form.contactLinkedIn" class="input input-bordered" />
        </div>

        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Note</span>
          </label>
          <textarea v-model="form.note" class="textarea textarea-bordered" placeholder="Note here ..."></textarea>
        </div>

        <button type="submit" class="btn btn-primary w-full">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editMode: Boolean,
    entry: Object,
  },
  data() {
    return {
      form: {
        companyName: '',
        contactMethod: '',
        contactName: '',
        contactLinkedIn: '',
        note: '',
      },
    };
  },
  watch: {
    entry: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.form = { ...newValue };
        }
      },
    },
  },
  methods: {
    saveEntry() {
      this.$emit('save-entry', { ...this.form });
    },
  },
};
</script>
