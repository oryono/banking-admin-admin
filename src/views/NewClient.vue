<template>
  <div>
    <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div>
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create New Client
          </h2>
        </div>
        <form class="mt-8" v-on:submit.prevent="submit">
          <div class="rounded-md">
            <div>
              <input
                  type="text"
                  v-model="form.name"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-gray focus:border-gray-300 sm:text-sm sm:leading-5"
                  placeholder="Name"
              />
            </div>
            <div class="-mt-px">
              <input
                  aria-label="Phone"
                  v-model="form.phone"
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-gray focus:border-gray-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Phone"
              />
            </div>

            <div class="-mt-px">
              <input
                  aria-label="Address"
                  v-model="form.address"
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-gray focus:border-gray-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Address"
              />
            </div>
          </div>

          <div class="mt-6">
            <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {createClient} from "../services/clientService";

export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        address: ""
      }
    };
  },
  methods: {
    submit() {
      return createClient(this.form).then().catch().finally();
    }
  }
};
</script>