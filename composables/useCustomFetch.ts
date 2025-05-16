
import { defu } from 'defu';
import type { NitroFetchOptions } from 'nitropack';

export function useCustomFetch<T extends string, K>(
	url: string,
	options: NitroFetchOptions<T> = {}
) {

  const config = useRuntimeConfig()
	const defaults: NitroFetchOptions<T> = {
		baseURL: options.baseURL ? options.baseURL : config.public.baseURL,
		headers: {
			'Content-type': 'application/json',
			Authorization: 'Bearer ',
		},
		query: {
			populate: '*'
		}
	}
	const params = defu(options, defaults)

	return $fetch<K>(url, params)
}