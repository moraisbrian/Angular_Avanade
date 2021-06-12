import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class CoreService<T> {

  protected http: HttpClient;
  protected url: string;

  constructor(http: HttpClient, url: string) {
    this.http = http;
    this.url = url;
  }

  public getLista(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }
}
