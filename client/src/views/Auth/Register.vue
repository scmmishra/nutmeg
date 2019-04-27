<template>
  <div class="flex h-screen">
    <div class="w-full max-w-md lg:flex m-auto self-center shadow-md">
      <div
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden pattern"
      ></div>
      <form
        class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-5 leading-normal flex flex-col justify-between"
        @keydown.enter="register"
      >
        <div class="mb-4 py-2 pl-3 border-l-4 border-black">
          <span class="tracking-wide text-2xl font-bold">Create Account</span>
          <p
            class="text-sm font-thin mt-2 text-grey-darkest"
          >Let's get your account set up. You can create an account using your email address or sign up using Google or Github</p>
        </div>
        <div class="mt-3">
          <label class="form-label">Full Name</label>
          <input class="form-input" type="text" placeholder="Jane Doe" v-model="form.full_name">
        </div>
        <div class="mt-5">
          <label class="form-label">Email Address</label>
          <input class="form-input" type="text" placeholder="jane@example.com" v-model="form.email">
        </div>
        <div class="mt-5">
          <label class="form-label">Password</label>
          <input
            class="form-input"
            type="password"
            placeholder="••••••••••••••••••"
            v-model="form.password"
          >
        </div>
        <div v-if="error"
          class="bg-red-lightest border border-red-light text-red-dark px-3 py-2 rounded relative mt-5"
          role="alert"
        >
          <span class="block sm:inline" v-html="error"/>
          <span @click="error = null" class="cursor-pointer absolute pin-t pin-b pin-r px-4 py-3">
						<FeatherIcon :name="'x'" :size="18"/>
          </span>
        </div>
        <div class="flex items-center justify-between mt-8">
          <button class="button" type="button" v-on:click="register">Register</button>

          <router-link class="link" :to="{name: 'login'}">Already Signed Up? Log In.</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Auth from "@/services/auth";

export default {
  name: "register",
  data() {
    return {
      form: {
        full_name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    async register() {
      try {
        console.log(this.form);
        await Auth.register(this.form);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
