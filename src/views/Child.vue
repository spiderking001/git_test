<template>
<div>
  <button @click="getUser">获取用户</button>
  <h2>修改分支</h2>
</div>
</template>

<script setup>
import {getUserList} from "@/api/user";
const getUser = async () => {
  const res = await getUserList()
  console.log(res)
}


</script>

<style scoped>

</style>