const container = async (): Promise<typeof import('*.vue')> => await import('@/views/posts/_container.vue')
const postsList = async (): Promise<typeof import('*.vue')> => await import('@/views/posts/postsList.vue')
const postsRead = async (): Promise<typeof import('*.vue')> => await import('@/views/posts/postsRead.vue')
const postsCreate = async (): Promise<typeof import('*.vue')> => await import('@/views/posts/postsCreate.vue')

export default {
  path: '/posts',
  component: container,
  redirect: '/posts-list',

  children: [
    {
      path: '/posts-list',
      component: postsList,
      meta: {
        title: 'postsList'
      }
    },
    {
      name: 'postsRead',
      component: postsRead,
      path: '/posts-read/:id',
      meta: {
        title: 'postsRead'
      }
    },
    {
      name: 'postsCreate',
      path: '/posts-create',
      component: postsCreate,
      meta: {
        title: 'postsCreate'
      }
    }
  ]
}
