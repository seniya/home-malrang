// import { HttpResponseCode } from '@/utils/common.constants'

/**
 * @description: Default Response interface
 * @example
 * interface Response extends HttpResponseInterface {
 *    items: [];
 * }
 * TODO: Change to enum after code definition
 */
export interface HttpResponseInterface {
  resultInfo: {
    displayMessage: string
    resultCode: string
    resultMessage: string
  }
}

export interface asyncStateInterface {
  isLoading: boolean
  isDone: boolean
  isError: string | null
}
