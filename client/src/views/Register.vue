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
				<input class="form-input" type="password" placeholder="******************">
			</div>
			<div class="flex items-center justify-between mt-8">
		      <button class="bg-black hover:shadow-md text-white tracking-wide py-3 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
		        Sign In
		      </button>

		      <a class="block tracking-wide no-underline hover:text-black text-grey-darkest text-xs font-bold" href="#">
		        Already Signed Up? Log In.
		      </a>
		    </div>
		</form>
	</div>
	<!-- <div class="w-full max-w-sm m-auto self-center pb-20">
		<div class="text-center p-5">
			<img alt="Vue logo" src="../assets/nutmeg.svg" class="h-16">
		</div>
		<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
			<div class="my-4 py-2 pl-3 border-l-4 border-black">
				<span class="tracking-wide text-2xl font-bold">Create Account</span>
			</div>
			<div class="mt-5">
				<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
	        		Full Name
	      		</label>
	      		<input class="w-full bg-grey-light appearance-none border-2 border-grey-light rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" placeholder="Jane Doe">
      		</div>
      		<div class="mt-8">
				<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
	        		Email Address
	      		</label>
				<input class="w-full bg-grey-light appearance-none border-2 border-grey-light rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" placeholder="jane@example.com">
			</div>
			<div class="mt-8">
				<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
	        		Password
	      		</label>
				<input class="w-full bg-grey-light appearance-none border-2 border-grey-light rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-black" type="password" placeholder="******************">
			</div>
		</form>
	</div> -->
</div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'register'
}

</script>