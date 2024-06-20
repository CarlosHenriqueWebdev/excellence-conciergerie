<template>
  <div class="py-[80px] bg-meadow-green">
    <div class="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[16px] px-[24px] lg:px-[80px]">
      <h1 class="text-[28px] uppercase font-bold">{{ title }}</h1>
      <span class="text-[16px] text-black-75">
        <router-link to="/" class="text-forest-night hover:brightness-100">Home</router-link>
        <template v-for="(segment, index) in pathArray" :key="index">
          <template v-if="index < pathArray.length - 1">
            / <router-link :to="getLinkPath(index)" class="text-black-75 hover:text-forest-night">{{ formatSegment(segment) }}</router-link>
          </template>
          <template v-else>
            / <router-link :to="getLinkPath(index)" class="text-black-75 hover:text-forest-night">{{ formatSegment(segment) }}</router-link>
          </template>
        </template>
      </span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const route = useRoute();

    const pathArray = computed(() => {
      return route.path.split('/').filter(segment => segment);
    });

    const getLinkPath = (index) => {
      return '/' + pathArray.value.slice(0, index + 1).join('/');
    };

    const formatSegment = (str) => {
      return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    };

    return {
      pathArray,
      getLinkPath,
      formatSegment
    };
  }
};
</script>

<style scoped>
/* Add any specific styles here */
</style>
