<template>
  <nuxt-loading-indicator color="#1de9b6" :throttle="0"/>
  <nuxt-layout>
    <nuxt-page/>
  </nuxt-layout>
</template>

<script setup>
import {useFavicon, usePreferredDark} from "@vueuse/core";
import getPostContent from "~/utils/getPostContent.js";

const route = useRoute();

const titleWithPrefix = computed(() => `Subilan's Blog - ${route.meta.title}`);
const titleWithSuffix = computed(() => {
  if (route.params.postname) {
    return `${getPostContent(route.params.postname).title} - Subilan's Blog`
  }
  return `${route.meta.title} - Subilan's Blog`;
});
const darkClass = computed(() => (forceMode.value === 'dark' || (darkMode.value && forceMode.value !== 'light')) ? 'dark' : '')

const darkModeCookie = useCookie('subilan-blog-dark-mode-indicator');
const darkMode = usePreferredDark();
const forceMode = useState('force-mode', () => darkModeCookie.value || '');

useHead({
  meta: [
    {
      property: 'og:title',
      content: titleWithPrefix
    }
  ],
  title: titleWithSuffix,
  htmlAttrs: {
    class: darkClass
  }
})

onMounted(() => {
  const isDark = usePreferredDark();
  useFavicon('/avatar.jpg', {
    rel: 'icon'
  })
})
</script>