<template>
  <HelloWorld />
  <div class="text-3xl font-bold underline bg-[red]">{{ message }}</div>
  <div>{{ messageCore }}</div>
  <TestComp />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { t } from "@fs/shared";
import { t as tCore } from "@fs/core";
import { TestComp } from "@fs/ui";

const message = ref(t());
const messageCore = ref(tCore());
</script>

