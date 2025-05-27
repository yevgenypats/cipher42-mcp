
export const customFetchInstance = async <T>(
  input: string | URL | globalThis.Request,
  init?: RequestInit,
): Promise<T> => {
  const HOST = process.env.HOST || 'https://api.cipher42.ai'
  // @ts-ignore
  let newInput = input.replace('https://api.cipher42.ai', HOST)
  if (init) {
    init.headers = {
      ...init.headers,
      Authorization: `Bearer ${process.env.CIPHER42_API_KEY}`,
    }
  }
  const res = await fetch(newInput, init)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data = body ? JSON.parse(body) : {}
  return { data, status: res.status, headers: res.headers } as T
};
