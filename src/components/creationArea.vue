<template>
  <div style="width: 300px;height: 600px;background-color: lightblue">
    <div class="creationBox">
      <div class="userInfoBox">
        <div class="username">
          <el-link @mouseover="usernameOn"
                   @mouseout="usernameOut"
                   :type="usernameType"
                   :underline=false
          >default
          </el-link>
        </div>
        <div style="display: flex" class="userInfoOther">
          5.3w粉丝 | 117.5w获赞
        </div>
      </div>
      <div style="flex:1;text-align: center" class="funcBtnBox">
        <el-button :type="userInfoFollowBtnType" @click="changeUserInfoFollowStatus">{{ userInfoFollowBtnText }}
        </el-button>
      </div>
    </div>

    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: "creationArea",
  data() {
    return {
      usernameType: "default",
      userInfoFollowBtnType: 'danger',
      userInfoFollow: false,
      userInfoFollowBtnText: '关注',
    }
  },
  methods: {
    usernameOn() {
      this.usernameType = "danger";
    },
    usernameOut() {
      this.usernameType = "default";
    },
    changeUserInfoFollowStatus() {
      this.userInfoFollowBtnType = this.userInfoFollow ? 'danger' : 'info'
      this.userInfoFollowBtnText = this.userInfoFollow ? '关注' : '已关注'
      this.userInfoFollow = !this.userInfoFollow
    }
  },
}
</script>

<style scoped>
.creationBox {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.funcBtnBox {
  background-color: blue;
  height: 50px;
  padding: 19px 12px 1px 0;
  display: flex;
  justify-content: center;
}

.userInfoBox {
  flex: 2;
  background-color: red;
  margin: 0;
  height: 50px;
  padding: 10px 12px;
}

.username {
  height: 20px;
  text-align: left;
  margin: 4px 0;
  font-size: 16px;
}

.userInfoOther {
  margin: 4px 0;
  height: 18px;
  font-size: 14px;
}


</style>
