import { Injectable } from '@nestjs/common';
import { AppConfig } from '../config';

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
  static async request<T>(
    endpoint: string,
    options: RequestInit = {
      method: HttpMethod.GET,
      headers: {
        'x-ts-api-key': AppConfig.traitsniperApiKey,
        accept: 'application/json',
      },
    },
  ): Promise<T> {
    const response = await fetch(
      `${AppConfig.traitsniperApiUrl}${endpoint}`,
      options,
    );
    const data = await response.json();
    return data as T;
  }
}
