<template>
	<div class="container-fluid">
		<div class="panel">
			<div class="panel-body">
				<el-row>
					<el-col :span="16" :offset="4">
						<el-input placeholder="编码或名称" v-model="searchText" class="input-with-select">
							<template #append>
								<el-button @click="search">
									<el-icon style="vertical-align: middle">
										<Search/>
									</el-icon>
								</el-button>
							</template>
						</el-input>
					</el-col>
					<el-col :span="4">
						<el-button class="pull-right" @click="dialogAddVisible=true">添加项目</el-button>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="panel">
			<div class="panel-header" style="height: 30px">
				<p class="panel-title pull-left">项目配置</p>
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

		<el-dialog
				title="添加项目"
				v-model="dialogAddVisible"
				width="50%">
			<el-form label-position="left" label-width="150px" :rules="rules" :model="projectParam" ref="projectAddForm">
				<el-form-item label="名称" prop="name">
					<el-input v-model="projectParam.name"></el-input>
				</el-form-item>
				<el-form-item label="负责人" prop="owner">
					<el-input v-model="projectParam.owner"></el-input>
				</el-form-item>
				<el-form-item label="控制台地址" prop="consoleUrl">
					<el-input v-model="projectParam.consoleUrl"></el-input>
				</el-form-item>
				<el-form-item label="详细" prop="detail">
					<el-input v-model="projectParam.detail"></el-input>
				</el-form-item>
			</el-form>
			<template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogAddVisible = false">取 消</el-button>
          <el-button type="primary" @click="addProjectConfig">确 定</el-button>
        </span>
			</template>
		</el-dialog>

	</div>
</template>

<script lang="ts" setup>
import type {TableColumnCtx} from 'element-plus/es/components/table/src/table-column/defaults'
import {ref} from "vue";

const renderHealthStatus = (row: any, column: TableColumnCtx<any>) => {
	return row.healthStatus === 0 ? '不可连通' : '健康'
}

const searchText = ref("")
const dialogAddVisible = ref(false)
const projectParam = ref({})
const tableData = ref([])

const search = () => {

}

const addProjectConfig = () => {
	console.info(projectParam)
	dialogAddVisible.value = false
	tableData.value.push(projectParam.value)
}

const rules = {
	name: [
		{required: true, message: '请输入项目名称', trigger: 'blur'},
		{min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur'}
	],
	description: [
		{required: true, message: '请输入描述信息', trigger: 'blur'},
		{min: 3, max: 120, message: '长度在 3 到 120 个字符', trigger: 'blur'}
	],
	parameterType: [
		{required: true, message: '请选择参数基本类型', trigger: 'change'}
	]
}
</script>


<style scoped>
</style>
