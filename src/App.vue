<template>
  <h1 class="text-3xl font-bold underline">Hello word!</h1>
  <router-view/>
  <div>
    <button @click="change">点击</button>
    <h2>{{$store.state.count}}</h2>
    <button @click="jump">跳转</button>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
const router = useRouter()
const store = useStore()
const change = () => {
  store.dispatch('increment1')
}
const jump = () => {
  router.push('/child')
}

</script>

<style scoped>

</style>