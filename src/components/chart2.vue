<template>
  <h1 class="text-center">Percentage of toys that are in stock by type</h1>
  <DoughnutChart :chartData="testData" />
</template>

<script>
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'chart2',
  components: {
    DoughnutChart,
  },
  created() {
    this.showPrices()
  },
  data() {
    return {
      testData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ['#FFCFDF', '#FEFDCA', '#A5DEE5', '#D9D7F1', '#E0F9B5', '#e0e0e0'],
          },
        ],
      },
    }
  },
  methods: {
    showPrices() {
      const toys = this.$store.getters.toysForDisplay
      var outOfStock = toys.reduce((acc, toy) => {
        if (!toy.inStock) acc++
        return acc
      }, 0)
      this.testData.labels.push('Out of stock')
      this.testData.datasets[0].data.push(outOfStock)
      var res = toys.reduce((acc, toy) => {
        if (toy.inStock) {
          toy.labels.forEach((label) => {
            if (!acc[label]) acc[label] = 1
            else acc[label]++
          })
        }
        return acc
      }, {})
      for (const label in res) {
        this.testData.labels.push(label)
        this.testData.datasets[0].data.push(res[label])
      }
    },
  },
}
</script>
