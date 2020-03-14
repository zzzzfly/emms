<template>
	<div>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column fixed prop="id" label="编号" width="150">
			</el-table-column>
			<el-table-column prop="name" label="图书名" width="120">
			</el-table-column>
			<el-table-column prop="author" label="作者" width="120">
			</el-table-column>
			<el-table-column label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" >查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination  background layout="prev, pager, next" 
			:page-size="pageSize" 
			:total="total" 
			@current-change="page">
</el-pagination>
	</div>
</template>

<script>
  export default {
    name: "BookManage",
    methods: {
			page(currentPage) {
				// alert(currentPage)
				const _this = this;
				axios.get('http://localhost:8081/book/findAll/'+(currentPage - 1)+'/5').then(
					function(resp) {
						console.log(resp)
						_this.tableData = resp.data.content
						_this.pageSize = resp.data.size
						_this.total = resp.data.totalElements
			})
			}
		},
    data() {
      return {
				pageSize: '1',
				total: '6',
        tableData: []
      }
		},
		created() {
			const _this = this;
			axios.get('http://localhost:8081/book/findAll/0/5').then(
				function(resp) {
					console.log(resp)
					_this.tableData = resp.data.content
					_this.pageSize = resp.data.size
					_this.total = resp.data.totalElements
			})
		},
	}
</script>