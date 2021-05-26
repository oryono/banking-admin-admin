<template>
  <div id="app">
    <div class="flex">
<!--      <aside class="w-1/5 bg-gray-200 h-screen lg:flex flex-col">
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
      </aside>-->
      <aside>
        <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
          <div class="flex px-2 py-2 items-center">
            <img
                class="h-12 w-12 rounded-full"
                src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                alt=""
            />
            <p class="ml-2 text-lg">Banking Admin</p>
          </div>

          <div class="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <router-link to="/" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-700" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="green">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                </svg>

                <span class="mx-4 font-medium">Dashboard</span>
              </router-link>

              <router-link to="/clients" class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="indigo">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>

                <span class="mx-4 font-medium">Clients</span>
              </router-link>

              <router-link to="/payments" class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>

                <span class="mx-4 font-medium">Payments</span>
              </router-link>
            </nav>
            <div class="flex items-center px-4 -mx-2">
              <img class="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"/>
              <h4 class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4>
            </div>
          </div>
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
