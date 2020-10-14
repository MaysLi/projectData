<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-header style='height: 150px;'></el-header>
      <el-container style='height: calc(100% - 200px);'>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
      <el-footer style='height: 50px;'>© 2017 YUJIANTAN All Rights Reserved</el-footer>
    </el-container>
  </div>
</template>
<script>
import Menu from '../menu/Menu'
export default {
    components: {Menu},
    data() {
        return{

        }
    },
    methods: {
    }
}
</script>
<style>
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-footer {
    text-align: center;
  }
  
  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    /* text-align: center; */
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>