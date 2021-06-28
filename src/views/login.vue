<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
         <img src="../assets/logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style lang="less" scoped>
.login_container {
  background: #2b4b6b;
  height: 100%;
}
.login_box{
  width: 5.625rem;
  height: 3.75rem;
  background: #ffffff;
  border-radius: .0625rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  .avatar_box{
    height: 1.625rem;
    width: 1.625rem;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: .125rem;
    box-shadow: 0 0 .125rem #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #ffffff;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  
}
</style>
