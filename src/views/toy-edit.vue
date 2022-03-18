<template>
  <section v-if="toyToEdit">
    <!-- <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize"> -->
      <input type="text" v-model="toyToEdit.name" title="toy name" />
      <input type="number" min="1" v-model="toyToEdit.price" title="price" />

      <input type="checkbox" id="stock" @change="toyToEdit.inStock = !toyToEdit.inStock" :checked="toyToEdit.inStock" />
      <label for="stock">in stock</label>
    <!-- </el-form> -->

    <!-- lables -->
    <el-button type="success" @click="save" :icon="Check" circle title="Save" />
  </section>
  <el-button type="info" @click="goBack" round>Back</el-button>
</template>

<script>
import { toyService } from '../services/toy.service.js'
import { Check } from '@element-plus/icons-vue'

export default {
  name: 'toy-edit',
  async created() {
    const { toyId } = this.$route.params
    if (toyId) {
      this.toyToEdit = await this.$store
        .dispatch({
          type: 'getToyById',
          toyId,
        })
    } else this.toyToEdit = toyService.getEmptyToy()
  },
  components: {},
  data() {
    return {
      toyToEdit: null,
      Check,
    }
  },
  methods: {
    async save() {
      await this.$store
        .dispatch({
          type: 'saveToy',
          toy: this.toyToEdit,
        })
        this.goBack()
    },
    goBack() {
      this.$router.push('/toy')
    },
  },
}
</script>
