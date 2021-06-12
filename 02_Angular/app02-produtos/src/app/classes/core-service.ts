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

  public postItem(item: T): Observable<T> {
    return this.http.post<T>(this.url, item);
  }

  public getItem(id: string): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  public putItem(id: string, item: T): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, item);
  }

  public deleteItem(id: string): Observable<T> {
    return this.http.delete<T>(`${this.url}/${id}`);
  }
}
