<template>
    <div style="height: 100%">
        <el-menu :default-active="$route.path" router  @select="handleSelect">
            <el-submenu index="/createData">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>载入数据</span>
            </template>
            <el-menu-item-group>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="/createData">新建</el-menu-item>
                <el-menu-item index="1-2">审批</el-menu-item>
                <el-menu-item index="1-3">上传</el-menu-item>
            </el-menu-item-group>
            </el-submenu>
            <el-menu-item index='/analysisData'>
                <i class="el-icon-menu"></i>
                <span slot="title">分析数据</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    methods: {
      handleSelect(index, indexPath) {
        console.log(index, indexPath)
      }
    }
}
</script>

<style>

</style>