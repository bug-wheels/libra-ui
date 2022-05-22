<template>
	<div class="container-fluid">
		<div class="panel">
			<div class="panel-body">
				<div class="font20" v-if="quote.english">{{ quote.english }}</div>
				<div class="font20" v-if="quote.chinese">{{ quote.chinese }}</div>
				<el-row>
					<el-col :span="20">
						<div class="chat-element">
							<div class="pull-left img-element">
								<img alt="image" style="width: 80px; height: 80px" class="img-circle" src="@/assets/img/Avatar.jpg">
							</div>
							<div class="media-body">
								<p class="font24 header">{{ welcome_msg }}</p>
								<p class="font13">
									跑步呐，最重要的是要有动力
								</p>
							</div>
						</div>
					</el-col>
					<el-col :span="4">&nbsp;</el-col>
				</el-row>
			</div>
		</div>

		<el-row :gutter="20">
			<el-col :span="6">
				<div class="metric c1">
					<!--              <span class="icon"><i class="el-icon-sold-out"/></span>-->
					<p>
						<span class="number">4</span>
						<span class="title">服务总数</span>
					</p>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="metric c2">
					<!--              <span class="icon"><i class="el-icon-sold-out"></i></span>-->
					<p>
						<span class="number">4</span>
						<span class="title">实例总数</span>
					</p>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="metric c3">
					<!--              <span class="icon"><i class="el-icon-sold-out"></i></span>-->
					<p>
						<span class="number">4</span>
						<span class="title">故障次数</span>
					</p>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="metric">
					<!--              <span class="icon">-->
					<!--								<i class="el-icon-sold-out"></i>-->
					<!--							</span>-->
					<p>
						<span class="number">0</span>
						<span class="title">凑个位置</span>
					</p>
				</div>
			</el-col>
		</el-row>

		<div class="panel">
			<div class="panel-header" style="height: 30px">
				<p class="panel-title pull-left">Cloud 数据统计</p>
				<el-button class="pull-right">
					<el-icon>
						<Refresh/>
					</el-icon>
					刷新
				</el-button>
			</div>
			<div class="panel-body">
				<el-table :data="tableData" height="250" style="width: 100%">
					<el-table-column fixed prop="project" label="项目" width="120"/>
					<el-table-column prop="name" label="负责人" width="120"/>
					<el-table-column prop="status" label="状态" width="80">
						<template #default="scope">
							<el-popover effect="light" trigger="hover" placement="top" width="auto">
								<template #default>
									<div>name: {{ scope.row.name }}</div>
									<div>address: {{ scope.row.address }}</div>
								</template>
								<template #reference>
									<el-tag :type="scope.row.aliveCount === 0 ? 'danger' : scope.row.aliveCount === 1 ? 'warning': ''">
										{{ scope.row.aliveCount === 0 ? '危险' : scope.row.aliveCount === 1 ? '亚健康' : '健康' }}
									</el-tag>
								</template>
							</el-popover>
						</template>
					</el-table-column>
					<el-table-column prop="aliveCount" label="存活实例数" width="100"/>
					<el-table-column prop="registrationCenter" label="注册中心" width="140"/>
					<el-table-column prop="detail" label="详细"/>
				</el-table>
			</div>
		</div>

	</div>
</template>

<script lang="ts">
import {randomQuote} from '@/api/quote'

const weekDays = ['日', '一', '二', '三', '四', '五', '六']

function getMsg(hour: number) {
	let msg
	if (hour < 5) {
		msg = '是不是又熬夜了，注意身体哦！'
	} else if (hour < 8) {
		msg = '一日之计在于晨！做好一天的计划'
	} else if (hour < 10) {
		msg = '上班开始！每天都是元气满满'
	} else if (hour < 12) {
		msg = '多和同事沟通能提高效率哦'
	} else if (hour < 13) {
		msg = '该吃饭了吧，人是铁，饭是钢哦！'
	} else if (hour < 14) {
		msg = '休息一下，下午才有力气搬砖！'
	} else if (hour < 17) {
		msg = '努力中....'
	} else if (hour < 18) {
		msg = '工作了一天，适当休息一下吧！'
	} else if (hour < 19) {
		msg = '看看自己劳动成功，好好的犒劳一下自己吧!'
	} else if (hour < 23) {
		msg = '不会在加班吧，努力吧骚年!'
	} else if (hour === 23) {
		msg = '偷偷告诉我：你最近是不是又胖了！'
	} else {
		msg = '鬼知道这是什么时间'
	}
	return msg
}

export default {
	data() {
		let myDate = new Date()
		myDate.getHours() // 获取当前小时数(0-23)

		const tableData2 = [
			{
				project: '用户服务',
				name: 'Tom',
				aliveCount: 4,
				registrationCenter: '第一机房 nacos',
				detail: '(UP) 127.0.0.1:1234, 127.0.0.1:1235, 127.0.0.1:1236, 127.0.0.1:1237'
			},
			{
				project: '风控服务',
				name: 'Tom',
				aliveCount: 10,
				registrationCenter: '第一机房 nacos',
				detail: '(UP) 127.0.0.1:1234, 127.0.0.1:1235, 127.0.0.1:1236, 127.0.0.1:1237，127.0.0.1:1234, 127.0.0.1:1235, 127.0.0.1:1236, 127.0.0.1:1237，127.0.0.1:1234, 127.0.0.1:1235, 127.0.0.1:1236, 127.0.0.1:1237，127.0.0.1:1234, 127.0.0.1:1235, 127.0.0.1:1236, 127.0.0.1:1237'
			},
			{
				project: '用户服务',
				name: 'Tom',
				aliveCount: 1,
				registrationCenter: '测试 consul',
				detail: '(UP) 127.0.0.1:1239'
			}, {
				project: '用户服务',
				name: 'Tom',
				aliveCount: 0,
				registrationCenter: '测试 eureka',
				detail: ''
			}
		]

		return {
			welcome_msg: '告诉我现在几点了？',
			dayOfWeek: '星期几',
			quote: {
				english: 'A friend is one of the nicest things you can have, and one of the best things you can be.',
				chinese: ''
			},
			tableData: tableData2
		}
	},
	mounted: function () {
		this.$nextTick(function () {
			setInterval(this.timer, 1000)
		})

		randomQuote()
				.then(response => {
					this.quote.english = response.data.english
					this.quote.chinese = response.data.chinese
				})
				.catch(error => {
					console.error(error)
				})
	},
	methods: {
		timer: function () {
			let now = new Date()
			this.dayOfWeek = weekDays[now.getDay()]
			this.welcome_msg = getMsg(now.getHours())
		}
	}
}
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

.media-body .header {
	margin-bottom: 10px;
	margin-top: 20px;
	font-weight: 100;
}

.img-element {
	padding: 10px;
}

.chat-element {
	padding: 15px;
}
</style>
