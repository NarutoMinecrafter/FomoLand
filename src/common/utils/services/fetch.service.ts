import { Injectable } from '@nestjs/common';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  OPTIONS = 'OPTIONS',
  HEAD = 'HEAD',
}

@Injectable()
export class FetchService {
  private apiUrl: string;
  private defaultHeaders: HeadersInit;

  constructor(apiUrl: string, defaultHeaders: HeadersInit) {
    this.apiUrl = apiUrl;
    this.defaultHeaders = defaultHeaders;
  }

  async request<T>(
    endpoint: string,
    options: RequestInit = {
      method: HttpMethod.GET,
      headers: this.defaultHeaders,
    },
  ): Promise<T> {
    const response = await fetch(`${this.apiUrl}${endpoint}`, options);
    const data = await response.json();
    return data as T;
  }
}
