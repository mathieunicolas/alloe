<template>
  <UCard :ui="{ body: 'p-0' }">
    <UTable :rows="rows" :columns="cols" :sort="{ column: 'date', direction: 'desc' }">
      <template #date-data="{ row }">{{
        useDateFormat(row.date, "DD-MM-YYYY").value.replaceAll("-", "/")
      }}</template>
      <template #title-data="{ row }"
        ><UButton
          :label="row.title"
          :to="row._path"
          variant="link"
          class="whitespace-normal"
      /></template>
    </UTable>
  </UCard>
</template>

<script setup>
definePageMeta({
  documentDriven: {
    page: false, // Keep page fetching enabled
    surround: false, // Disable surround fetching
  },
});

const { navigation } = useContent();
const rows = navigation.value.find(el => el._path === '/news').children

const cols = [
  {
    key: "date",
    label: "date",
  },
  {
    key: "title",
    label: "info",
  },
];
</script>
