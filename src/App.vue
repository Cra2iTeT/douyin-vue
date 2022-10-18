<template>
  <index-page></index-page>
</template>

<style lang="scss">
html {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

.init {
  height: 100% !important;
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

#app {
  height: 100%;
  width: 100%;
}

::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
<script>
import IndexPage from "@/views/index";

export default {
  components: {IndexPage}
}
</script>
