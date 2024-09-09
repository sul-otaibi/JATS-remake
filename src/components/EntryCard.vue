<template>
  <div class="card w-full shadow-2xl mb-4">
    <div @click="toggleDetails" class="card-body cursor-pointer">
      <h2 class="card-title">
        {{ entry.companyName }}
        <span
          class="ml-auto badge uppercase"
          :class="statusClass(entry.status)"
        >
          {{ entry.status }}
        </span>
      </h2>

      <div v-if="showDetails" class="w-full">
        <p><strong>Contact Method:</strong> {{ entry.contactMethod }}</p>
        <p v-if="entry.contactMethod === 'linkedin contact'">
          <strong>Contact Name:</strong> {{ entry.contactName }}
        </p>
        <p v-if="entry.contactMethod === 'linkedin contact'">
          <strong>LinkedIn Profile:</strong>
          <a :href="entry.contactLinkedIn" target="_blank">{{ entry.contactLinkedIn }}</a>
        </p>

        <div class="mt-4 w-full">
          <label class="flex w-full items-center">
            <div class="font-bold mx-4">Status:</div>
            <select v-model="entry.status" class="select select-bordered w-full max-w-xs uppercase">
              <option v-for="status in statusOptions" :key="status" :value="status" class="uppercase">
                {{ status }}
              </option>
            </select>
          </label>
        </div>

        <div class="mt-4 flex justify-between">
          <button @click="editEntry" class="btn btn-sm btn-neutral">Edit</button>
          <button @click="deleteEntry" class="btn btn-sm btn-error">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    entry: Object,
  },
  data() {
    return {
      showDetails: false,
      statusOptions: ['pending', 'contacted', 'responded', 'rejected', 'accepted', 'interviewed'],
    };
  },
  watch: {
    'entry.status'(newStatus) {
      this.updateEntryStatus(newStatus);
    },
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    statusClass(status) {
      switch (status) {
        case 'pending':
          return 'badge-neutral';
        case 'contacted':
          return 'badge-warning';
        case 'responded':
          return 'badge-info';
        case 'rejected':
          return 'badge-error';
        case 'accepted':
          return 'badge-success';
        case 'interviewed':
          return 'badge-accent';
        default:
          return '';
      }
    },
    deleteEntry() {
      this.$emit('delete-entry', this.entry.id);
    },
    editEntry() {
      this.$emit('edit-entry', this.entry);
    },
    updateEntryStatus(newStatus) {
      let entries = JSON.parse(localStorage.getItem('entries')) || [];
      const index = entries.findIndex((e) => e.id === this.entry.id);

      if (index !== -1) {
        entries[index].status = newStatus;
        localStorage.setItem('entries', JSON.stringify(entries));
      }
    },
  },
};
</script>