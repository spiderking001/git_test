<template>
<div>
  <button @click="getUser">获取用户</button>
  <div>修改child</div>
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