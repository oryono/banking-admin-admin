<template>
  <div class="mt-4">
    <div>
      <p class="text-2xl p-1 font-bold text-gray-500 inline-grid">Clients </p>
    </div>

    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
        <tr>
          <th class="px-4 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            #
          </th>
          <th class="px-4 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th class="px-4 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Phone
          </th>
          <th class="px-4 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Address
          </th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="client in clients" :key="client.id">
          <td class="px-3 py-4 whitespace-no-wrap">{{ client.id }}</td>
          <td class="px-3 py-4 whitespace-no-wrap">{{ client.name }}</td>
          <td class="px-3 py-4 whitespace-no-wrap">{{ client.phone }}</td>
          <td class="px-3 py-4 whitespace-no-wrap">{{ client.address }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {getClients} from "../services/clientService";

export default {
  name: "Clients",
  data() {
    return {
      clients: []
    };
  },
  methods: {},
  mounted() {
    getClients().then(response => {
      console.log(response);
      this.clients = response.data.data;
    }).finally();
  }
};
</script>