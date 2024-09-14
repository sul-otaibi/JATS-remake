<template>
  <div class="max-w-[40rem] mx-auto p-4">
    <header class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-black">Job Application Tracker</h1>
      <button @click="showForm = true" class="rounded-md btn btn-primary text-base-100">Add Entry</button>
    </header>

    <div class="flex flex-col w-full">
      <EntryCard
        v-for="entry in entries"
        :key="entry.id"
        :entry="entry"
        @delete-entry="deleteEntry"
        @edit-entry="openEditForm"
      />
    </div>

    <EntryForm
      v-if="showForm"
      :editMode="editMode"
      :entry="currentEntry"
      @close-form="closeForm"
      @save-entry="saveEntry"
    />
  </div>
</template>

<script>
import EntryCard from './components/EntryCard.vue';
import EntryForm from './components/EntryForm.vue';

export default {
  components: {
    EntryCard,
    EntryForm,
  },
  data() {
    return {
      entries: [],
      showForm: false,
      editMode: false,
      currentEntry: null,
    };
  },
  created() {
    this.loadEntries();
  },
  methods: {
    loadEntries() {
      const savedEntries = localStorage.getItem('entries');
      if (savedEntries) {
        this.entries = JSON.parse(savedEntries);
      }
    },
    saveEntries() {
      localStorage.setItem('entries', JSON.stringify(this.entries));
    },
    closeForm() {
      this.showForm = false;
      this.editMode = false;
      this.currentEntry = null;
    },
    saveEntry(entry) {
      if (this.editMode) {
        const index = this.entries.findIndex((e) => e.id === entry.id);
        if (index !== -1) {
          this.entries.splice(index, 1, entry);
        }
      } else {
        entry.id = Date.now();
        entry.status = 'pending';
        this.entries.push(entry);
      }
      this.saveEntries();
      this.closeForm();
    },
    deleteEntry(id) {
      this.entries = this.entries.filter((entry) => entry.id !== id);
      this.saveEntries();
    },
    openEditForm(entry) {
      this.currentEntry = entry;
      this.editMode = true;
      this.showForm = true;
    },
  },
};
</script>