import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin} from 'src/app/data/interfaces/auth.interface';
import { IHttpOptions } from 'src/app/data/interfaces/common.interface';
import { IResponse } from 'src/app/data/interfaces/response.interface';
import { HttpOptionsTools } from 'src/app/shared/tools/http-options.tool';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private readonly _httpTool: HttpOptionsTools,
    private readonly _httpClient: HttpClient
  ) {}

  public getData(data: any): Observable<IResponse> {
    const optionsHttp: IHttpOptions = {
      path: 'service',
    };

    const { url } = this._httpTool.runSendData(optionsHttp);
    return this._httpClient.get<IResponse>(url);
  }
}
