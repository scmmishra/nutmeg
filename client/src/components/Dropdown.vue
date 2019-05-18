<template>
  <div class="flex items-center justify-center">
    <div class="relative">
      <div v-if="open" @click="open = false" class="fixed inset-0"></div>
      <button @click="open = !open" class="relative flex items-center focus:outline-none" v-shortkey="['meta','m']" @shortkey="open = !open" tabindex="-1">
        <slot></slot>
      </button>
      <transition
        enter-active-class="transition-all transition-fastest ease-out-quad"
        leave-active-class="transition-all transition-faster ease-in-quad"
        enter-class="opacity-0 scale-70"
        enter-to-class="opacity-100 scale-100"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-70"
      >
        <div v-if="open" class="origin-top-right absolute right-0 mt-2 w-64 bg-white rounded-lg border shadow py-2">
          <ul class="list-reset flex flex-col">
            <li class="flex text-gray-800 hover:text-black">
              <FeatherIcon :name="`user`" :size="20" class="px-4 py-2"/>
              <a href="#" class="block text-base py-2 text-gray-700 hover:bg-indigo-500 hover:text-black">Profile</a>
            </li>
            <li class="flex text-gray-700 hover:text-black">
              <FeatherIcon :name="`settings`" :size="20" class="px-4 py-2"/>
              <a href="#" class="block text-base py-2 text-gray-700 hover:bg-indigo-500 hover:text-black">Account Settings</a>
            </li>
            <li class="flex text-gray-700 hover:text-black">
              <FeatherIcon :name="`log-out`" :size="20" class="px-4 py-2"/>
              <a href="#" class="block text-base py-2 text-gray-700 hover:bg-indigo-500 hover:text-black" @click="logout()">Log Out</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>