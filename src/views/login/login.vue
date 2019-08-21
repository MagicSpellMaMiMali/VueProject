<template>
  <div class="login">
    <el-card class="box-card">
        <div class="title">
          <img src="../../assets/images/logo_index.png" alt="">
        </div>
        <!-- 表单结构 -->
        <el-form>
          <el-form-item>
            <el-input placeholder="请输入手机号"></el-input>
          </el-form-item>
           <el-form-item>
            <el-input style="width:70%;float:left" placeholder="请输入验证码" ></el-input>
            <el-button style="float:right">发送验证码</el-button>
          </el-form-item>
          <el-form-item>
            <el-checkbox style="float:left">我已阅读同意<a class="user">用户协议</a>和<a class="tiao">隐私条款</a></el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%">登录</el-button>
          </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .login {
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/images/login_bg.jpg');
    background-size: cover;
    position: relative;
    .box-card {
    width: 480px;
    height: 350px;
    position: absolute;
    left: 50%;
    top:50%;
    transform:translate(-50%,-50%);
    text-align: center;
      .title {
        margin-bottom: 30px;
        img{
        width: 220px;
        height: 50px;
        }
      }
      .user{
        color:#409EFF;
      }
       .tiao{
        color: #409EFF;
      }

    }
  }

</style>
