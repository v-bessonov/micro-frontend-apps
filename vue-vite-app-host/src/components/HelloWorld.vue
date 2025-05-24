<script setup lang="ts">
import {ref} from 'vue'
import ButtonRemoteApp1 from 'vue-vite-app-remote-1/ButtonRemoteApp1'
import ButtonRemoteApp2 from 'vue-vite-app-remote-2/ButtonRemoteApp2'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">

    <ul>
      <li>
        <button type="button" @click="count++" style="width: 250px">Local Vue App count is {{ count }}</button>
      </li>
      <li>
        <ButtonRemoteApp1/>
      </li>
      <li>
        <ButtonRemoteApp2/>
      </li>
    </ul>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
    >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
    >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
button {
  background-color: white;
  color: black;
  width: 250px;
}
</style>
