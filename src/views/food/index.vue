<template>
  <div class="food-container">
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
import RaddarChart from '@/views/home/components/RaddarChart'
import PieChart from '@/views/home/components/PieChart'
import BarChart from '@/views/home/components/BarChart'

export default {
  name: 'Food',
  components: {
    RaddarChart,
    PieChart,
    BarChart
  }
}
</script>

<style lang="scss" scoped>

.food-container{
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
