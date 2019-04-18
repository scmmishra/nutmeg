<template>
<div class="flex h-screen">
	<div class="w-full max-w-sm m-auto self-center pb-20">
		<div class="text-center p-5">
			<img alt="Vue logo" src="@/assets/nutmeg.svg" class="h-16">
		</div>
		<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
			<div class="my-4 py-2 pl-3 border-l-4 border-black">
				<span class="tracking-wide text-2xl font-bold">Login</span>
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
				<input class="w-full bg-grey-light appearance-none border-2 border-grey-light rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-black" type="password" placeholder="••••••••••••••••••">
			</div>
			<div class="flex items-center justify-between mt-8">
		      <button class="button" type="button">
		        Login
		      </button>

		      <a class="link" href="">
		        Forgot Password? Click Here.
		      </a>
		    </div>
		</form>
	</div>
</div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login'
}

</script>