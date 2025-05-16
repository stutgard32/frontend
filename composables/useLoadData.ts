import type { NitroFetchOptions } from 'nitropack'
import type { ApiResponse } from "~/types/types"
export const useLoadData = async <T extends string, K>(path: string, options: NitroFetchOptions<T> = {}) => {

  const { data } = await useAsyncData<ApiResponse<K>>(path, () =>
    useCustomFetch<T, ApiResponse<K>>(path, options)
  )

  return data
}

