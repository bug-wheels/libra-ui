<template>
	<el-container>
		<el-header :style="{ height: '76px'}">
			<el-row>
				<el-col :span="8">
					<img src="@/assets/img/logo.png" width="115" style="padding-top:15px; padding-left:20px;">
				</el-col>
				<el-col :span="16" style="text-align: right; padding-right: 30px;">
					<el-button @click="dash" plain size="medium" v-if="isLogin">控制台</el-button>
				</el-col>
			</el-row>
		</el-header>
		<el-main>
			dfasdfasdf
		</el-main>
		<el-footer>&copy; 2017 - {{ new Date().getFullYear() }}</el-footer>
	</el-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const isLogin = ref(true)
isLogin.value = true
const dash = () => {
	router.push({name: 'dash'})
}
</script>

<style scoped>
.el-container {
	height: 100%;
}

.el-header {
	height: 76px;
	background-color: white;
	line-height: 76px;
}

.el-header > span,
.el-header .el-dropdown {
	font-size: 18px;
}

.el-footer {
	background-color: #252d36;
	color: #ffc852;
	text-align: center;
	line-height: 60px;
}

.el-main {
	color: #333;
	text-align: center;
}
</style>
