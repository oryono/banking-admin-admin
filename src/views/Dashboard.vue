<template>
  <div class="">
    <p class="text-2xl p-1 font-bold text-gray-500">Dashboard</p>
    <div class="flex gap-4">
      <div class="flex-1 rounded-md p-4 shadow-lg bg-green-200">
        <p class="text-4xl text-green-900">Deposits</p>
        <Deposits/>
      </div>

      <div class="flex-1 rounded-md p-4 shadow-lg bg-red-200">
       <p class="text-4xl text-red-900">Withdraws</p>
        <Withdraws/>
      </div>

      <div class="flex-1 rounded-md p-4 shadow-lg bg-gray-200">
        <p class="text-4xl text-gray-700">Transfers</p>
        <Transfers/>
      </div>
    </div>
  </div>
</template>
<script>
import Deposits from "../components/Deposits";
import Withdraws from "../components/Withdraws";
import Transfers from "../components/Transfers";
export default {
  components: {Transfers, Withdraws, Deposits}
};
</script>