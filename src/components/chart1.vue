<template>
  <h1 class="text-center">Average prices per toy type</h1>
  <DoughnutChart :chartData="testData" />
</template>

<script>
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'chart1',
  components: {
    DoughnutChart,
  },
  created() {
    this.preperDate()
  },
  data() {
    return {
      testData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ['#FFCFDF', '#FEFDCA', '#A5DEE5', '#D9D7F1', '#E0F9B5'],
          },
        ],
      },
    }
  },
  methods: {
    preperDate() {
      const res = this.$store.getters.toys.reduce((acc, toy) => {
        toy.labels.forEach((label) => {
          if (!acc[label]) {
            acc[label] = {
              total: toy.price,
              amount: 1,
            }
          } else {
            acc[label].total += toy.price
            acc[label].amount++
          }
        })
        return acc
      }, {})
      for (const label in res) {
        this.testData.labels.push(label)
        this.testData.datasets[0].data.push(res[label].total / res[label].amount)
      }
    },
  },
}
</script>