import { Injectable } from '@angular/core';
import { IHttpOptions } from 'src/app/data/interfaces/common.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpOptionsTools {
  public runSendData({ param, path, body }: IHttpOptions): {
    url: string;
    body: any;
  } {
    const url: string = param
      ? `${environment.urlApi}/${path}/${param}`
      : `${environment.urlApi}/${path}`;

    return {
      url,
      body,
    };
  }
}
