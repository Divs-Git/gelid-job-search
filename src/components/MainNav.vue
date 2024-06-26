<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto h-full flex flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a
          :href="url"
          class="flex h-full items-center text-xl"
          >{{ company }}</a
        >

        <nav class="h-full ml-12">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-9 h-full first:ml-0"
            >
              <a
                href=""
                class="flex h-full items-center py-2.5"
              >
                {{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Gelid Careers',
      url: 'https://www.google.com/about/careers/applications/',
      menuItems: ['Teams', 'Locations', 'Benefits', 'Jobs', 'Students'],
    };
  },
};
</script>
