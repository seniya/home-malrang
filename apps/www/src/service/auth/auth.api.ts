import type { AxiosPromise } from 'axios'
import { axiosInstance } from '@/utils/instance.axios'
import { RequestEnum } from '@/utils/common.constants'

import type { AuthResponseInterface } from '@/service/auth/model/auth.interface'

enum Api {
  auth = '/auth'
}

/**
 * @description: httpAuth
 */
export const httpAuth = async (data: any): AxiosPromise<AuthResponseInterface> => {
  return await axiosInstance({
    method: RequestEnum.GET,
    url: Api.auth,
    data
  })
}
