const container = async (): Promise<typeof import('*.vue')> => await import('@/views/pages/_container.vue')
const pageMain = async (): Promise<typeof import('*.vue')> => await import('@/views/pages/pageMain.vue')
const page1 = async (): Promise<typeof import('*.vue')> => await import('@/views/pages/page1.vue')
const page2 = async (): Promise<typeof import('*.vue')> => await import('@/views/pages/page2.vue')

export default {
  path: '/pages',
  component: container,
  redirect: '/pages/1',

  children: [
    {
      path: '/pages/main',
      component: pageMain,
      meta: {
        title: 'pageMain'
      }
    },
    {
      path: '/pages/1',
      component: page1,
      meta: {
        title: 'page1'
      }
    },
    {
      path: '/pages/2',
      component: page2,
      meta: {
        title: 'page2'
      }
    }
  ]
}
