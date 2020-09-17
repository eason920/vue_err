<template>
	<div>
		<form class="form-signin" @submit.prevent='login'>
			<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
			<label for="inputEmail" class="sr-only">Email address</label>
			<input v-model="user.username" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
			<label for="inputPassword" class="sr-only">Password</label>
			<input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
			<div class="checkbox mb-3">
				<label>
					<input type="checkbox" value="remember-me"> Remember me
				</label>
			</div>
			<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
			<p class="mt-5 mb-3 text-muted">© 2020</p>
		</form>
		<a href="#" @click.prevent="aclick">try index</a>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			user: {
				usernme: '',
				password: ''
			}
		}
	},
	// created: function(){
	created() {

	},
	methods: {
		login: function(){
			const api = process.env.API_PATH + 'admin/signin';
			const vm = this;
			this.$http.post(api, vm.user).then((res)=>{
				if( res.data.success ){
					vm.$router.push('/admin/products');
				}else{
					alert('sign err');
				};
			});
		}
	}
}
</script>

<style scoped>
	html,
	body {
		height: 100%;
	}

	body {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		padding-top: 40px;
		padding-bottom: 40px;
		background-color: #f5f5f5;
	}

	.form-signin {
		width: 100%;
		max-width: 330px;
		padding: 15px;
		margin: auto;
	}
	.form-signin .checkbox {
		font-weight: 400;
	}
	.form-signin .form-control {
		position: relative;
		box-sizing: border-box;
		height: auto;
		padding: 10px;
		font-size: 16px;
	}
	.form-signin .form-control:focus {
		z-index: 2;
	}
	.form-signin input[type="email"] {
		margin-bottom: -1px;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}
	.form-signin input[type="password"] {
		margin-bottom: 10px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

</style>