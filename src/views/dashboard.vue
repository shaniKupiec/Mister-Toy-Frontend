<template>
  <DoughnutChart :chartData="testData" />
</template>

<script>
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'dashboard',
  components: {
    DoughnutChart,
  },
  created() {},
  data() {
    return {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }
  },
  methods: {
    getMap() {
      return this.$store.getters.getToys.reduce((acc, toy) => {
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
    },
  },
}
</script>
