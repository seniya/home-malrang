const DefaultLayout = async (): Promise<typeof import('*.vue')> => await import('@/views/members/_container.vue')
const Main = async (): Promise<typeof import('*.vue')> => await import('@/views/members/main.vue')

export default {
  path: '/members',
  component: DefaultLayout,
  redirect: '/members/main',

  children: [
    {
      path: '/members/main',
      component: Main,
      meta: {
        title: '로그인/아웃 페이지'
      }
    }
  ]
}
