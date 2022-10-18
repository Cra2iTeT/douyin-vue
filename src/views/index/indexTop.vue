<template>
  <div class="init">
    <el-row style="height: 100% !important;">
      <el-col :span="12">
        <el-row :gutter="20" style="height: 100%;margin: 0">
          <el-col :span="1" style="">
          </el-col>
          <el-col :span="16" style="padding: 0">
            <el-row>
              <div style="width: calc(100% - 70px)">
                <el-input class="searchBox" v-model="input" v-bind:placeholder="searchPlaceHolder" clearable/>
              </div>
              <div style="width: 70px">
                <el-button class="searchBtn" key="plain" type="" text>
                  搜索
                </el-button>
              </div>
            </el-row>
          </el-col>
          <el-col :span="7" style="padding: 0">
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" style="display: flex">
        <div class="blankBox">

        </div>
        <div class="functionBox">

        </div>
        <div class="avatarBox">
          <el-popover
              placement="bottom-start"
              effect="dark"
              :width="346"
              trigger="hover"
          >
            <div class="avatarPop">
              <el-row :gutter="20" style="height: 96px;text-align:center;display: flex;align-items: center;margin: 0">
                <el-col :span="6" class="avatarPopBox">
                  <div class="popIcon">
                    <span>视频图标</span>
                  </div>
                  <div class="popWord1">
                    <span>0</span>
                  </div>
                  <div class="popWord2">
                    <span>我的作品</span>
                  </div>
                </el-col>
                <!--                <el-divider direction="vertical" style="margin: 0;height: 25px"/>-->
                <el-col :span="6" class="avatarPopBox">
                  <div class="popIcon">
                    <span>爱心图标</span>
                  </div>
                  <div class="popWord1">
                    <span>3133</span>
                  </div>
                  <div class="popWord2">
                    <span>我的喜欢</span>
                  </div>
                </el-col>
                <!--                <el-divider direction="vertical" style="margin: 0;height: 25px"/>-->
                <el-col :span="6" class="avatarPopBox">
                  <div class="popIcon">
                    <span>收藏图标</span>
                  </div>
                  <div class="popWord1">
                    <span>2</span>
                  </div>
                  <div class="popWord2">
                    <span>我的收藏</span>
                  </div>
                </el-col>
                <!--                <el-divider direction="vertical" style="margin: 0;height: 25px"/>-->
                <el-col :span="6" class="avatarPopBox">
                  <div class="popIcon">
                    <span>历史图标</span>
                  </div>
                  <div class="popWord1">
                    <span>30天内</span>
                  </div>
                  <div class="popWord2">
                    <span>观看历史</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <el-divider></el-divider>
            <div class="avatarFuncBox">
              <el-row :gutter="20" style="display: flex;align-items: center;text-align: center;margin: 0">
                <el-col :span="6" style="background-color: #42b983;height: 100%">
                  个人主页
                </el-col>
                <el-col :span="6" style="background-color: chartreuse;height: 100%">
                  Q币充值
                </el-col>
                <el-col :span="6" style="background-color: cornflowerblue;height: 100%">
                  直播伴侣
                </el-col>
                <el-col :span="6" style="background-color: chocolate;height: 100%">
                  退出登录
                </el-col>
              </el-row>
            </div>
            <template #reference>
              <el-avatar :size="40" style="margin: 10px 0" :src="circleUrl"/>
            </template>
          </el-popover>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "indexTop",
  data() {
    return {
      input: '',
      searchPlaceHolder: '搜索你感兴趣的内容',
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}

</script>

<style scoped lang="scss">
.searchBox {
  width: 100%;
  margin: 10px 0;
  border-radius: 5px;
  border-right: 0;
  height: 40px;
}

.searchBtn {
  height: 40px;
  margin: 10px 0;
}

.blankBox {
  background-color: blue;
  width: calc(100% - 350px - 76px);
}

.functionBox {
  background-color: red;
  width: 350px;
}

.avatarBox {
  text-align: center;
  background-color: salmon;
  width: 76px;
  height: 60px;
}

.avatarPop {
  font-size: 13px;

  .popIcon {
    height: 46px;
  }

  .popWord1 {
    height: 25px;
  }

  .popWord2 {
    height: 25px;
  }

  .avatarPopBox {
    background-color: #42b983;
    height: 100%;
    width: 80px !important;
  }

}

.avatarFuncBox {
  height: 26px;
  margin-bottom: 12px;
}

</style>
