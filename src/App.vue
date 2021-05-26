<template>
  <div id="app">
    <div class="flex">
      <aside class="w-1/5 bg-gray-200 h-screen lg:flex flex-col">
        <div class="py-4 flex px-2 py-2 items-center">
          <img
              class="h-12 w-12 rounded-full"
              src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
              alt=""
          />
          <p class="ml-2 text-lg">Banking Admin</p>
        </div>
        <div>
          <ul class="px-1">
            <li class="py-2 px-3 w-full hover:bg-gray-400 rounded">
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="green">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                </svg>
                <router-link to="/">Dashboard</router-link>
              </div>

            </li>
            <li class="py-2 px-3 w-full hover:bg-gray-400 rounded">
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="indigo">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <router-link to="clients" class="inline-grid">Clients</router-link>
              </div>
            </li>

            <li class="py-2 px-3 w-full hover:bg-gray-400 rounded">
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <router-link to="payments" class="inline-grid">Payments</router-link>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <main class="w-4/5 p-4">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
</style>
