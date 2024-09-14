<template>
  <div class="w-full my-4 rounded-md shadow-lg">
    <div class="collapse collapse-arrow ">
      <input type="checkbox" name="my-accordion-2" />
      <h2 class="card-title collapse-title">
        {{ entry.companyName }}
        <span
          class="ml-auto uppercase badge"
          :class="statusClass(entry.status)"
        >
          {{ entry.status }}
        </span>
      </h2>

      <div class="w-full collapse-content">
        <p><strong>Contact Method:</strong> {{ entry.contactMethod }}</p>
        <p v-if="entry.contactMethod === 'linkedin contact'">
          <strong>Contact Name:</strong> {{ entry.contactName }}
        </p>
        <p v-if="entry.contactMethod === 'linkedin contact'">
          <strong>LinkedIn Profile:</strong>
          <a :href="entry.contactLinkedIn" target="_blank">{{ entry.contactLinkedIn }}</a>
        </p>
        <p v-if="entry.note">
          <strong>Note:</strong> {{ entry.note }}
        </p>

        <div class="flex items-center justify-between">
          <div>
            <label class="flex items-center w-full gap-2">
              <div class="font-bold">Status:</div>
              <select v-model="entry.status" class="uppercase rounded-md select select-bordered select-sm max-w-30 bg-base-100">
                <option v-for="status in statusOptions" :key="status" :value="status" class="uppercase">
                  {{ status }}
                </option>
              </select>
            </label>
          </div>
          <div class="join">
            <button @click="editEntry" class="join-item btn btn-primary btn-sm btn-outline">Edit</button>
            <button @click="showDeleteConfirmation = true" class="join-item btn btn-error btn-sm btn-outline">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" :class="{ 'modal-open': showDeleteConfirmation }">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Confirm Deletion</h3>
        <p class="py-4">Are to delete the entry for "{{ entry.companyName }}"?</p>
        <div class="modal-action">
          <button @click="showDeleteConfirmation = false" class="btn">Cancel</button>
          <button @click="confirmDelete" class="btn btn-error">Delete</button>
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
      showDeleteConfirmation: false,
      statusOptions: ['pending', 'contacted', 'responded', 'rejected', 'accepted', 'interviewed'],
    };
  },
  watch: {
    'entry.status'(newStatus) {
      this.updateEntryStatus(newStatus);
    },
  },
  methods: {
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
    confirmDelete() {
      this.$emit('delete-entry', this.entry.id);
      this.showDeleteConfirmation = false;
    },
  },
};
</script>