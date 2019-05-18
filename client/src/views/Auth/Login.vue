<template>
  <div class="flex h-screen">
    <div class="w-full max-w-sm m-auto self-center pb-20">
      <div class="text-center p-5">
        <img alt="Vue logo" src="@/assets/nutmeg.svg" class="h-16 select-none">
      </div>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @keydown.enter="login">
        <div class="my-4 py-2 pl-3 border-l-4 border-black">
          <span class="tracking-wide text-2xl font-bold">Login</span>
        </div>
        <div class="mt-8">
          <label class="form-label">Email Address</label>
          <input
            class="form-input"
            type="email"
            v-model="form.email"
            id="login-email"
            placeholder="jane@example.com"
            autofocus
          >
        </div>
        <div class="mt-8">
          <label class="form-label">Password</label>
          <input
            class="form-input"
            type="password"
            v-model="form.password"
            id="login-password"
            placeholder="••••••••••••••••••"
          >
        </div>
        <div v-show="invalid" class="mt-8">
          <p class="text-md font-thin text-gray-800">🙅‍♀️ Incorrect email id or password</p>
        </div>
        <div class="flex items-center justify-between mt-8">
          <button class="button" type="submit" v-on:click="login">Login</button>

          <a class="link" href>Forgot Password? Click Here.</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "@/services/auth";

export default {
  name: "Login",
  data() {
    return {
      invalid: false,
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      try {
        const response = await Auth.login(this.form);
        const setToken = this.$store.dispatch('setToken', response.data.token)
        const setUser = this.$store.dispatch('setUser', response.data.user)
        Promise.all([setToken, setUser]).then(() => this.$router.push('/'))
      } catch (error) {
        this.invalidLogin();
      }
    },
    invalidLogin() {
      this.invalid = true;
      document.querySelector("#login-email").classList.add("invalid");
      document.querySelector("#login-password").classList.add("invalid");
    }
  }
};
</script>
<style type="text/css">
#login-password.invalid {
  border-color: #ef5753;
  background-color: #fcebea;
  /* also need animation and -moz-animation */
  -webkit-animation: shake 0.5s linear;
}

#login-email.invalid {
  border-color: #ef5753;
  background-color: #fcebea;
  /* also need animation and -moz-animation */
  -webkit-animation: shake 0.5s linear;
}
/* also need keyframes and -moz-keyframes */
@-webkit-keyframes shake {
  8%,
  41% {
    -webkit-transform: translateX(-10px);
  }
  25%,
  58% {
    -webkit-transform: translateX(10px);
  }
  75% {
    -webkit-transform: translateX(-5px);
  }
  92% {
    -webkit-transform: translateX(5px);
  }
  0%,
  100% {
    -webkit-transform: translateX(0);
  }
}
</style>