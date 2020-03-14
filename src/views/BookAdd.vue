<template>
	<div>
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="图书名称" prop="name">
				<el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="作者" prop="author">
				<el-input type="text" v-model="ruleForm.author" autocomplete="off"></el-input>
			</el-form-item>
			<!-- <el-button :plain="true" @click="open2">成功</el-button> -->
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
export default {
	name: "BookAdd",
	 data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('图书名不能为空'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validateAuthor = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('作者明不能为空'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          author: '',
        },
        rules: {
          name: [
						{ validator: validateName, trigger: 'blur' },
						{required: true, message: '请输入作者', trigger: 'blur'}
          ],
          author: [
						{required: true, message: '请输入作者', trigger: 'blur'},
            {min: 2, max: 10, message: '名称在2到10个字符之间', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
				const _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
						axios.post('http://localhost:8081/book/save', this.ruleForm).then(function(resp) {
							console.log(resp)
							if(resp.data == 'success'){
								_this.$message({
									showClose: true,
									message: '这是一条消息提示',
									type: 'success'
								});
							}
						})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>