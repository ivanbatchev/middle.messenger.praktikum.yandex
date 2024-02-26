import { Methods, Primitive } from './types'

class Api {
  private readonly baseUrl: string
  private readonly withCredentials: boolean

  constructor(baseUrl: string, withCredentials: boolean = false) {
    this.baseUrl = baseUrl
    this.withCredentials = withCredentials
  }

  get<T>(
    queryParams?: Record<string, unknown>,
    headers?: Record<string, string>
  ): Promise<T> {
    const urlWithParams =
      this.baseUrl +
      this.createQueryString(queryParams as Record<string, Primitive>)
    return this.request<T>(Methods.GET, urlWithParams, headers)
  }

  post<T>(
    body: Record<string, unknown>,
    headers?: Record<string, string>
  ): Promise<T> {
    const passedHeaders = { 'Content-Type': 'application/json', ...headers }
    return this.request<T>(
      Methods.POST,
      this.baseUrl,
      passedHeaders,
      JSON.stringify(body)
    )
  }

  private createQueryString(params: Record<string, Primitive>): string {
    if (!params) return ''
    const queryString = Object.keys(params)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
      )
      .join('&')
    return '?' + queryString
  }

  private request<T>(
    method: Methods,
    baseUrl: string,
    headers?: Record<string, string>,
    body?: string
  ): Promise<T> {
    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, baseUrl, true)
      xhr.withCredentials = this.withCredentials
      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key])
        })
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            res(JSON.parse(xhr.responseText))
          } catch (e) {
            rej(e)
          }
        } else {
          rej(new Error(`Запрос отменен с ошибкой: ${xhr.status}`))
        }
      }

      xhr.onerror = () => {
        rej(new Error('Network error'))
      }

      xhr.send(body)
    })
  }
}

export const API = new Api('https://api.com')
