<template>
  <p class="text-2xl text-gray-500">
    <money-format :value="parseInt(total)"
                  locale="en"
                  currency-code="UGX"
                  :subunits-value=true
                  :hide-subunits=true>
    </money-format>
  </p>

</template>

<script>


import {getTransfersTransactionsTotals} from "../services/totalTransactionsService";
import MoneyFormat from 'vue-money-format'

export default {
  components: {
    'money-format': MoneyFormat
  },
  data() {
    return {
      total: 0
    }
  },

  mounted() {
    return getTransfersTransactionsTotals().then(
        (res) => {
          this.total = res.data.data
        }
    ).catch().finally()
  }
}
</script>