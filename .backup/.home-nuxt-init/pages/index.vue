<script setup lang="ts">
import { useQuasar } from 'quasar'
import type { QBtnProps, QNotifyOptions } from 'quasar'

const { dialog, bottomSheet, loading, loadingBar, notify, dark, screen }
  = useQuasar()

loadingBar.setDefaults({
  color: 'green',
  size: '15px',
  position: 'bottom'
})

const themeIcon = computed(() => (dark.isActive ? 'dark_mode' : 'light_mode'))

const showBottomsheet = () =>
  bottomSheet({
    message: 'Bottom Sheet',
    actions: [
      {
        label: 'Drive',
        img: 'https://cdn.quasar.dev/img/logo_drive_128px.png',
        id: 'drive'
      },
      {
        label: 'Keep',
        img: 'https://cdn.quasar.dev/img/logo_keep_128px.png',
        id: 'keep'
      },
      {
        label: 'Google Hangouts',
        img: 'https://cdn.quasar.dev/img/logo_hangouts_128px.png',
        id: 'calendar'
      },
      {
        label: 'Calendar',
        img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
        id: 'calendar'
      }
    ]
  })

const random = <T extends string>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)]

type Position = Exclude<QNotifyOptions['position'], undefined>

const buttons: QBtnProps[] = [
  {
    label: 'Bottomsheet',
    onClick: () => showBottomsheet()
  },
  {
    label: 'Loading',
    onClick: () => {
      loading.show()
      setTimeout(() => {
        loading.hide()
      }, 1000)
    }
  },
  {
    label: 'LoadingBar',
    onClick: () => {
      loadingBar.start()
      setTimeout(() => {
        loadingBar.stop()
      }, 1000)
    }
  },
  {
    label: 'Dialog',
    onClick: () => dialog({ message: 'Hello World' })
  },
  {
    label: 'Notify',
    onClick: () =>
      notify({
        message: 'Hello World',
        position: random<Position>([
          'left',
          'right',
          'center',
          'bottom',
          'top'
        ])
      })
  }
]
</script>

<template>
  <q-page class="q-pl-lg">
    <p class="text-h6 q-pt-md">
      Plugin Showcase
    </p>
    <q-list>
      <q-item
        v-for="(button, idx) in buttons"
        :key="idx"
      >
        <q-btn
          color="primary"
          v-bind="button"
        />
      </q-item>
      <q-item>
        <q-toggle
          :model-value="dark.isActive"
          checked-icon="dark_mode"
          unchecked-icon="light_mode"
          size="3rem"
          @update:model-value="(val) => dark.set(val)"
        />
      </q-item>
    </q-list>
    <p class="text-h6 q-pt-md">
      Directive Showcase
    </p>
    <q-list
      bordered
      separator
      style="max-width: 318px"
    >
      <q-item
        v-ripple
        clickable
      >
        <q-item-section>Ripple</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
