<template>
	<div class="container-fluid">
		<el-row :gutter="20">
			<el-col :span="8">
				<div class="metric c1">
					<!--              <span class="icon"><i class="el-icon-sold-out"/></span>-->
					<p>
						<span class="number">Nacos</span>
						<span class="title">Alibaba</span>
					</p>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="metric c2">
					<p>
						<span class="number">Eureka</span>
						<span class="title">Netflix</span>
					</p>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="metric c3">
					<p>
						<span class="number">Consul</span>
						<span class="title">HashiCorp</span>
					</p>
				</div>
			</el-col>
		</el-row>

		<div class="panel">
			<div class="panel-header" style="height: 30px">
				<p class="panel-title pull-left">注册中心</p>
				<el-button class="pull-right">
					<el-icon>
						<Refresh/>
					</el-icon>
					刷新
				</el-button>
			</div>
			<div class="panel-body">
				<el-table :data="tableData" height="500" style="width: 100%">
					<el-table-column prop="type" label="类型" width="100"/>
					<el-table-column prop="name" label="名称" width="140"/>
					<el-table-column prop="owner" label="负责人" width="120"/>
					<el-table-column prop="status" label="状态" width="80" :formatter="renderHealthStatus"/>
					<el-table-column prop="consoleUrl" label="控制台地址" width="180"/>
					<el-table-column prop="detail" label="详细"/>
				</el-table>
			</div>
		</div>

	</div>
</template>

<script lang="ts" setup>
import type {TableColumnCtx} from 'element-plus/es/components/table/src/table-column/defaults'

const renderHealthStatus = (row: any, column: TableColumnCtx<any>) => {
	return row.healthStatus === 0 ? '不可连通' : '健康'
}

const tableData = [
	{
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}, {
		type: 'Nacos',
		name: '第一机房 Nacos',
		owner: 'Tom',
		healthStatus: 0,
		registrationCenter: '第一机房 nacos',
		consoleUrl: 'http://abc.com/dd',
		detail: '第一机房测试环境使用'
	}
]
</script>

<style scoped>
.c1 {
	background: #7f7fd5; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, rgb(127, 127, 213), rgb(134, 168, 231), rgb(145, 234, 228)); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, rgb(127, 127, 213), rgb(134, 168, 231), rgb(145, 234, 228)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	background-blend-mode: screen;
	background-size: cover;
}

.c2 {
	background: #ff4b1f; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, rgb(255, 75, 31), rgb(255, 144, 104)); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, rgb(255, 75, 31), rgb(255, 144, 104)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	background-blend-mode: screen;
	background-size: cover;
}

.c3 {
	background: #2196f3; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, rgb(33, 150, 243), rgb(244, 67, 54)); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, rgb(33, 150, 243), rgb(244, 67, 54)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	background-blend-mode: screen;
	background-size: cover;
}

</style>
