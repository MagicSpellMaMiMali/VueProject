<template>
  <div class="login">
    <el-card class="box-card">
        <div class="title">
          <img src="../../assets/images/logo_index.png" alt="">
        </div>
        <!-- 表单结构 -->
        <el-form :model="formData" :rules="rules" ref="loginForm">
          <el-form-item prop="mobile">
            <el-input v-model='formData.mobile' placeholder="请输入手机号"></el-input>
          </el-form-item>
           <el-form-item prop="code">
            <el-input v-model="formData.code" style="width:70%;float:left" placeholder="请输入验证码" ></el-input>
            <el-button style="float:right">发送验证码</el-button>
          </el-form-item>
          <el-form-item prop="check">
            <el-checkbox v-model="formData.check" style="float:left">我已阅读同意<a class="user">用户协议</a>和<a class="tiao">隐私条款</a></el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button @click='login' type="primary" style="width:100%">登录</el-button>
          </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    var func = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('您必须无条件同意被坑'))
      }
    }
    return {
      formData: {
        mobile: '',
        code: '',
        check: false
      },
      rules: {
        mobile: [
          { required: true, message: '登录手机号不能为空', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '登录手机号格式错误' }

          // required是必填项，message是提示信息
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '验证码必须为6位数字' }
        ],
        check: [{
          validator: func // 自定义函数
        }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log(this.$refs.loginForm)
      // 手动校验表单数据  validate
      this.$refs.loginForm.validate(isOK => {
        if (isOK) {
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.formData// post参数是在data中写入的
          }).then(result => {
            console.log(result)
          })
        }
      })
    }
  }
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
