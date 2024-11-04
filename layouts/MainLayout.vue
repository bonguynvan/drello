<script setup lang="ts">
const links = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    },
    badge: 100
  }, {
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
  }, {
    label: 'Vertical Navigation',
    icon: 'i-heroicons-chart-bar',
    to: '/components/vertical-navigation'
  }, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette'
  }], [{
    label: 'Examples',
    icon: 'i-heroicons-light-bulb'
  }, {
    label: 'Help',
    icon: 'i-heroicons-question-mark-circle'
  }]
]

const items = [
  [{
    label: 'Atlassian Home',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    },
    badge: 100
  }, {
    label: 'Confluence',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
  }, {
    label: 'Vertical Navigation',
    icon: 'i-heroicons-chart-bar',
    to: '/components/vertical-navigation'
  }, {
    label: 'Bitbucket',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette'
  }], [{
    label: 'Trello',
    icon: 'i-heroicons-light-bulb'
  }, {
    label: 'Help',
    icon: 'i-heroicons-question-mark-circle'
  }]
]

const open = ref(true)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
    <div id="MainLayout" class="w-full fixed z-50">
        <div id="TopMenu" class="w-full bg-[#210c4d] md:block hidden">
            <div class="flex justify-between">
                <ul class="flex items-center justify-start text-md text-[#f2f2f2] px-2 h-12 bg-[#210c4d] w-1.2">
                    <li
                        class="
                            relative
                            flex
                            items-center
                            px-2.5
                            h-10
                            cursor-pointer
                            hover:bg-[#d4cdf842] 
                            rounded-md
                        "
                    >
                    <UDropdown v-model:open="open" :items="items" :popper="{ placement: 'bottom-start', offsetDistance: 0 }">
                        <Icon name="ic:baseline-apps" size="28"/>
                    </UDropdown>
                        <!-- <Icon name="ic:baseline-apps" size="28"/> -->
                    </li>
                    <li class="relative flex items-center justify-center px-2.5 h-10 hover:bg-[#d4cdf842] rounded-md">
                        <NuxtLink to="/">
                            <img src="/logo.png" alt="" class="h-8">
                        </NuxtLink>
                    </li>
                    <li class="relative flex items-center px-2.5 h-10 hover:bg-[#d4cdf842] rounded-md">
                        <UDropdown v-model:open="open" :items="items" :popper="{ placement: 'bottom-start' }">
                            Workspaces
                            <Icon name="mdi-light:chevron-down" size="26"/>
                        </UDropdown>
                    </li>
                    <li class="relative flex items-center px-2.5 h-10 hover:bg-[#d4cdf842] rounded-md">
                        <UDropdown v-model:open="open" :items="items" :popper="{ placement: 'bottom-start' }">
                            Recent
                            <Icon name="mdi-light:chevron-down" size="26"/>
                        </UDropdown>
                    </li>
                    <li class="relative flex items-center px-2.5 h-10 hover:bg-[#d4cdf842] rounded-md">
                        <UDropdown v-model:open="open" :items="items" :popper="{ placement: 'bottom-start' }">
                            Starred
                            <Icon name="mdi-light:chevron-down" size="26"/>
                        </UDropdown>
                    </li>
                    <li class="relative flex items-center px-2.5 h-10 hover:bg-[#d4cdf842] rounded-md">
                        <UDropdown v-model:open="open" :items="items" :popper="{ placement: 'bottom-start' }">
                            Templates
                            <Icon name="mdi-light:chevron-down" size="26"/>
                        </UDropdown>
                    </li>
                    <li class="relative flex items-center px-2.5 h-10">
                        <UButton>Create</UButton>
                    </li>
                </ul>
            </div>
        </div>
        <div id="SideNav" class="md:block xs:hidden w-[20vh]">
            <UVerticalNavigation :links="links" />
        </div>
    </div>
</template>