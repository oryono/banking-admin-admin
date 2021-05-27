<template>
  <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
      <div>
        <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
            alt="Workflow"
        />

        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8" v-on:submit.prevent="submit">
        <input type="hidden" name="remember" value="true"/>
        <div class="rounded-md">
          <div>
            <input
                name="username"
                type="text"
                v-model="credentials.username"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-gray focus:border-gray-300 sm:text-sm sm:leading-5"
                placeholder="Username"
            />
          </div>
          <div class="-mt-px">
            <input
                aria-label="Password"
                name="password"
                v-model="credentials.password"
                type="password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-gray focus:border-gray-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
            />
          </div>
        </div>

        <div class="mt-6 flex items-center justify-between">
          <div class="flex items-center">
            <input
                id="remember_me"
                type="checkbox"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label class="ml-2 block text-sm leading-5 text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm leading-5">
            <router-link
                to="#"
                class="font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Forgot your password?
            </router-link>
          </div>
        </div>

        <div class="mt-6">
          <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none transition duration-150 ease-in-out"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {authenticate} from "../services/authService";

export default {
  name: "Login",
  props: {},
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      return authenticate(this.credentials).then(
          res => {
            localStorage.setItem("credentials", JSON.stringify(res.data));
            this.$router.push("/");
          }
      ).catch().finally();
    }
  },

  mounted() {
    localStorage.clear();
  }
};
</script>