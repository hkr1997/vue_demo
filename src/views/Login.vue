<template>
<div>
	<div class="header">#header</div>
		<div class="container">
			<div class="left,colum"></div>
				<div class="center,colum">
					<div class="content">		
						<el-form ref="form" :model="loginForm" class="loginContainer" :rules="rules">
							<h3 class="loginTitle">系统登录</h3>
						  <el-form-item label="用户名" prop="username">
							<el-input type='text' auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
						  </el-form-item>
						  <el-form-item label="密码" prop="pass">
							<el-input type='password' auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
						  </el-form-item>
						  <el-form-item label="验证码" prop="code">
							<el-input class="code" type='text' auto-complete="false" v-model="loginForm.code" placeholder="请点击图片刷新"></el-input>
							<img :src=captchaUrl alt="">
							<el-checkbox v-model="checked">记住我</el-checkbox>
						  </el-form-item>
						  <el-button type="primary" class="btn" v-on:click="onSubmit(123)">登录</el-button>
						</el-form>
					</div>
				</div>
			<div class="right,colum"></div>
		</div>
	<div class="footer">#footer</div>
</div>
</template>

<script>
export default {
	name:"Login",
    data() {
      return {
		captchaUrl:'',
		checked:true,
        loginForm: {
          username: '123',
		  password: '',
		  code: '',
		  
        },
		rules: {
		          username: [
		            { required: true, message: '请输入用户名', trigger: 'blur' },
		            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
		          ],
				  pass: [
				     { required: true, message: '请输入密码', trigger: 'blur' }
				  ],
				  code: [
				     { required: true, message: '请输入密码', trigger: 'blur' }
				  ],
		        }
		      };
    },
    methods: { 
      onSubmit(num) {
        console.log('submit!'+String(num));
      }
    }
  }
</script>

<style scoped>

  body {
    min-width: 550px;
    font-weight: bold;
    font-size: 20px;
  }

  .header,
  .footer {
    background: rgb(209, 204, 204);
    text-align: center;
    height: 60px;
    line-height: 60px;
  }

  .container {
    overflow: hidden;
  }
  .column {
    text-align: center;
    height: 300px;
    line-height: 300px;
  }
  .left, .right, .center {
    float: left;
  }
  .center {
    width: 100%;
    background: rgb(206, 201, 201);
  }
  .left {
    width: 400px;
    margin-left: -100%;
    background: rgba(95, 179, 235, 0.972);
  }
  .right {
    width: 400px;
    margin-left: -150px;
    background: rgb(231, 105, 2);
  }
  .content {
    margin: 0 450px 0 450px;
  }
 .loginContainer{
	 border-radius: 15px;
	 background-clip: padding-box;
	 margin: 25px auto;
	 width: 350px;
	 padding: 15px 35px 15px 35px;
	 background: #fff;
	 border: 1px solid #eaeaea;
	 box-shadow: 0 0 25px;	
 }
	.btn{
		width: 50%;
	}
	.loginTitle{
		margin: 0px auto 20px auto;
		text-align: center;
	}

</style>