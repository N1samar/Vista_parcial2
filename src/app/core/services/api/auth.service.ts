import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, ILoginResponse } from 'src/app/data/interfaces/auth.interface';
import { IHttpOptions } from 'src/app/data/interfaces/common.interface';
import { IResponse } from 'src/app/data/interfaces/response.interface';
import { HttpOptionsTools } from 'src/app/shared/tools/http-options.tool';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _httpTool = inject(HttpOptionsTools);
  private readonly _httpClient = inject(HttpClient);

  constructor() {}

  public login(data: ILogin): Observable<IResponse> {
    const optionsHttp: IHttpOptions = {
      path: 'auth/user',
    };

    const { url } = this._httpTool.runSendData(optionsHttp);
    return this._httpClient.post<IResponse<ILoginResponse>>(url, data);
  }
}
