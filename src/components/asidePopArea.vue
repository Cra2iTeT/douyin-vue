<template>
  <div>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
      <el-menu-item index="1">作品</el-menu-item>
      <el-menu-item index="2">评论</el-menu-item>
      <el-menu-item index="3">合集</el-menu-item>
    </el-menu>
  </div>
  <div>

  </div>
</template>

<script>
export default {
  name: "asidePopArea",
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key) {
      console.log(key)
    }
  }
}
</script>

<style scoped>

</style>
