<template>
  <div class="init common-layout index">
    <el-container class="init">
      <el-aside id="indexAside">
        <index-aside></index-aside>
      </el-aside>
      <el-container>
        <el-header id="indexTop" ref="topPlace">
          <index-top></index-top>
        </el-header>
        <el-main id="indexMain" ref="videoView">
          <index-main ></index-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import IndexAside from "@/views/index/indexAside";
import IndexTop from "@/views/index/indexTop";
import IndexMain from "@/views/index/indexMain";

export default {
  name: "indexPage",
  components: {IndexMain, IndexTop, IndexAside},
  mounted() {
    this.$refs.videoView.$el["style"].height = `${this.$refs.topPlace.$el["offsetHeight"]}px`;
  }
}
</script>

<style>

#indexAside {
  max-width: 165px;
}

#indexTop {
  padding: 0 !important;
  max-height: 60px;
}

#indexMain {
  padding: 0 !important;
}
</style>
