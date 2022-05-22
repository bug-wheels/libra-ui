<template>
	<el-container>
		<el-header :style="{ height: '76px'}">
			<el-row>
				<el-col :span="14">
					<img src="@/assets/img/logo.png" width="115" style="padding-top:15px; padding-left:20px;">
				</el-col>
				<el-col :span="10" class="align-right padding20">
					<el-button @click="$router.push({ path: '/' })">回首页</el-button>
				</el-col>
			</el-row>
		</el-header>
		<el-container>
			<el-aside class="aside">
				<el-menu
						:default-active="menuActive"
						:uniqueOpened="true"
						style="border: 0"
						background-color="#545c64"
						text-color="#fff"
						:router="true"
						active-text-color="#ffd04b">
					<el-menu-item index="/app/dash">
						<el-icon>
							<Menu/>
						</el-icon>
						处理中心
					</el-menu-item>
					<el-sub-menu index="1">
						<template #title>
							<el-icon>
								<Cloudy/>
							</el-icon>
							<span>微服务监控</span>
						</template>
						<el-menu-item index="/app/rc">注册中心</el-menu-item>
						<el-menu-item index="/app/cloudProject">项目配置</el-menu-item>
					</el-sub-menu>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			currentYear: new Date().getFullYear()
		}
	},
	computed: {
		menuActive() {
			return this.$route.path
		},
		isLogin() {
			return true
		}
	}
}
</script>

<style scoped>
.el-header {
	background-color: white;
}

.aside {
	width: 200px !important;
	height: 100% !important;
	background-color: #545c64;
}

.el-container {
	height: 100%;
}

.el-header > span,
.el-header .el-dropdown {
	font-size: 18px;
}

.el-main {
	text-align: left;
	color: #333;
}
</style>
