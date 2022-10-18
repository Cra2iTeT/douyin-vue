<template>
  <div>
    <div>

    </div>
    <div>
      <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>

// 要嵌套
// 叫做asidePopArea
// 三个部分再单独做三个组件

<script>
export default {
  name: "commentArea",
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    load() {
      this.count += 2
    }
  }
}
</script>

<style>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>

