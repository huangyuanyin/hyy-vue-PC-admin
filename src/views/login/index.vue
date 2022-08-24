<template>
	<div class="login-wrapper">
		<div id="login_box">
			<h2>LOGIN</h2>
			<div id="input_box">
				<input type="text" placeholder="请输入用户名">
			</div>
			<div class="input_box">
				<input type="password" placeholder="请输入密码">
			</div>
			<button @click="Login">登录</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { addCategorys } from "../../api/user.js"
const Login = async () => {
	await addCategorys().then(aaa => {
		console.log('mockdata', aaa)
	})
}
</script>

<style lang="scss" scoped>
.login-wrapper {
	background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg') no-repeat;
	background-size: 100% 130%;
	position: relative;
}

#login_box {
	width: 20%;
	height: 300px;
	background-color: #00000060;
	margin: 0 auto;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	border-radius: 10px;
	padding: 50px 50px;
}

h2 {
	color: #ffffff90;
	margin-top: 5%;
}

#input-box {
	margin-top: 5%;
}

span {
	color: #fff;
}

input {
	border: 0;
	width: 60%;
	font-size: 15px;
	color: #fff;
	background: transparent;
	border-bottom: 2px solid #fff;
	padding: 5px 10px;
	outline: none;
	margin-top: 20px;
}

button {
	margin-top: 50px;
	width: 60%;
	border-radius: 10px;
	border: 0;
	color: #fff;
	text-align: center;
	line-height: 30px;
	font-size: 15px;
	background-image: linear-gradient(to right, #30cfd0, #330867);
}

#sign_up {
	margin-top: 45%;
	margin-left: 60%;
}

a {
	color: #b94648;
}
</style>