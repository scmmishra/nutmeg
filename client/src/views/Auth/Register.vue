<template>
<div class="flex h-screen">
	<div class="w-full max-w-md lg:flex m-auto self-center shadow-md">
		<div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden pattern">
		</div>
		<form class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-5 leading-normal flex flex-col justify-between">
			<div class="mb-4 py-2 pl-3 border-l-4 border-black">
				<span class="tracking-wide text-2xl font-bold">Create Account</span>
				<p class="text-sm font-thin mt-2 text-grey-darkest">Let's get your account set up. You can create an account using your email address or sign up using Google or Github</p>
			</div>
			<div class="mt-3">
				<label class="form-label" for="grid-first-name">
	        		Full Name
	      		</label>
	      		<input class="form-input" type="text" placeholder="Jane Doe">
      		</div>
      		<div class="mt-5">
				<label class="form-label" for="grid-first-name">
	        		Email Address
	      		</label>
				<input class="form-input" type="text" placeholder="jane@example.com">
			</div>
			<div class="mt-5">
				<label class="form-label" for="grid-first-name">
	        		Password
	      		</label>
				<input class="form-input" type="password" placeholder="••••••••••••••••••">
			</div>
			<div class="flex items-center justify-between mt-8">
		      <button class="button" type="button">
		        Sign In
		      </button>

		      <router-link class="link" :to="{name: 'login'}">
		        Already Signed Up? Log In.
		      </router-link>
		    </div>
		</form>
	</div>
</div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'register'
}

</script>
