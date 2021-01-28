<template>
  <div class="dashboard-container">
    <panel-group :user="user" :order="order" :price="price" :obtain="obtain" />
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import { queryMiniProgramUser } from '@/api/user'
import { queryAllOrder, queryTodayOrder } from '@/api/order'

import PanelGroup from './components/PanelGroup'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    RaddarChart,
    PieChart,
    BarChart
  },
  data() {
    return {
      user: 0,
      order: 0,
      price: 0,
      obtain: 0
    }
  },
  created: async function() {
    await this.getMiniProgramUser()
    await this.getAllOrder()
    await this.getTodayOrder()
  },
  methods: {
    getMiniProgramUser: async function() {
      try {
        const list = await queryMiniProgramUser(null)
        this.user = list.length
      } catch (e) {
        console.log(e)
      }
    },
    getAllOrder: async function() {
      try {
        await queryAllOrder(null)
      } catch (e) {
        console.log(e)
      }
    },
    getTodayOrder: async function() {
      try {
        const list = await queryTodayOrder(null)
        this.order = list.length
        this.price = list.map(i => i['orderPrice']).reduce((acc, i) => acc + i)
        this.obtain = list.filter(i => i['status'] === 2).length
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }

}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}

</style>
