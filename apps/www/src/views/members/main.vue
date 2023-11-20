<template>
  <div>
    <h3>로그인 페이지</h3>

    <div>
      <p>authStore.authInfo : {{ authStore.authInfo }}</p>
      <p>authStore.isLodingAuthInfo: {{ authStore.isLodingAuthInfo }}</p>
      <p>authStore.isDoneAuthInfo : {{ authStore.isDoneAuthInfo }}</p>
      <p>authStore.errorAuthInfo : {{ authStore.errorAuthInfo }}</p>

      <div v-if="authStore.getIsLogin && authStore.getToken !== ''">
        <p>로그인 되었습니다.</p>
        <p>userId : {{ authStore.authInfo.userId }}</p>
        <p>name : {{ authStore.authInfo.name }}</p>
        <p>lv : {{ authStore.authInfo.lv }}</p>
        <div>
          <input type="button" value="LOGOUT" @click="onClickLogout" />
        </div>
      </div>

      <div v-else>
        <form name="normal-form" @submit.prevent="onClickLogin">
          <p>
            <label for="userId">userId</label>
            <input type="text" name="userId" id="userId" />
          </p>
          <p>
            <label for="password">password</label>
            <input type="password" name="password" id="password" />
          </p>
          <p>
            <input type="submit" value="LOGIN" :disabled="authStore.isLodingAuthInfo" />
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/service/auth/auth.module'
import { onMounted, onUnmounted } from 'vue'
import { logger } from '@/utils/instance.logger'

/* request, prepare, on, cb, action */

const authStore = useAuthStore()

async function requestApiHttpAuth(): Promise<void> {
  await authStore.actionHttpAuth({})
}

function onClickLogin(): void {
  requestApiHttpAuth()
    .then(() => {
      console.log('ok')
    })
    .catch((err) => {
      console.log(err)
    })
}
function onClickLogout(): void {
  logger.debug('log out!!')
  authStore.actionLogout()
}

onMounted(() => {
  logger.debug('mounted memberMain')
})
onUnmounted(() => {
  logger.debug('unmounted memberMain')
})
</script>

<script lang="ts">
export default {
  name: 'memberMain',
  inheritAttrs: false,
  customOptions: {}
}
</script>
