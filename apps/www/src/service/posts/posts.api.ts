import type { AxiosPromise } from 'axios'
import { axiosInstance } from '@/utils/instance.axios'
import { RequestEnum } from '@/utils/common.constants'
import type { PostsResponseInterface, PostInfoResponseInterface } from '@/service/posts/model/post.interface'

enum Api {
  posts = '/posts',
  postInfo = '/postInfo'
}

/**
 * @description: httpPosts
 */
export const httpPosts = async (): AxiosPromise<PostsResponseInterface> => {
  return await axiosInstance({
    method: RequestEnum.GET,
    url: Api.posts
  })
}

/**
 * @description: httpPostInfo
 */
export const httpPostInfo = async (): AxiosPromise<PostInfoResponseInterface> => {
  return await axiosInstance({
    method: RequestEnum.GET,
    url: Api.postInfo
  })
}
