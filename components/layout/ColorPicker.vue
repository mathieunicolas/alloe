<template>
  <UPopover mode="click">
    <template #default="{ open }">
      <UButton
        color="primary"
        variant="outline"
        square
        :class="[open && 'bg-gray-50 dark:bg-gray-800']"
        aria-label="Color picker"
      >
        <UIcon
          name="i-heroicons-swatch-20-solid"
          class="w-5 h-5 text-primary-500 dark:text-primary-400"
        />
      </UButton>
    </template>

    <template #panel>
      <div class="p-2">
        <div class="grid grid-cols-5 gap-px">
          <LayoutColorPickerPill
            v-for="color in primaryColors"
            :key="color.value"
            :color="color"
            :selected="primary"
            @select="primary = color"
          />
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import type { Colors, Nuance } from "~/colors.types";
import colorsd from "#tailwind-config/theme/colors";
const colors: Record<string, string | Nuance> = colorsd;
const appConfig = useAppConfig();
const colorMode = useColorMode();
const us = useCounterStore();

// Computed

const primaryColors = computed(() =>
  appConfig.ui.colors
    .filter((color) => color !== "primary")
    .map((color) => ({
      value: color,
      text: color,
      hex: colors[color][colorMode.value === "dark" ? 400 : 500],
    }))
);
const primary = computed({
  get() {
    const data = primaryColors.value.find(
      (option) => option.value === appConfig.ui.primary
    );
    return data ? data : { value: "green" };
  },
  set(option) {
    if (option?.value) {
      appConfig.ui.primary = option.value;

      window.localStorage.setItem("nuxt-ui-primary", appConfig.ui.primary);
      if (us.userData) {
        us.userData.prefColor = appConfig.ui.primary;
      }
    }
  },
});

const grayColors = computed(() =>
  ["slate", "cool", "zinc", "neutral", "stone"].map((color) => ({
    value: color,
    text: color,
    hex: colors[color][colorMode.value === "dark" ? 400 : 500],
  }))
);
const gray = computed({
  get() {
    return grayColors.value.find((option) => option.value === appConfig.ui.gray);
  },
  set(option) {
    if (option?.value) {
      appConfig.ui.gray = option.value;
      window.localStorage.setItem("nuxt-ui-gray", appConfig.ui.gray);
    }
  },
});
</script>
