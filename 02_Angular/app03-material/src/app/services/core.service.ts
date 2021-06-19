import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export abstract class CoreService<T> {

  protected http: HttpClient;
  protected url: string;
  protected snackBar: MatSnackBar;

  constructor(http: HttpClient, url: string, snackBar: MatSnackBar) {
    this.http = http;
    this.url = url;
    this.snackBar = snackBar;
  }

  public showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'x', {
      duration: isError ? 6000 : 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? 'error' : 'success'
    });
  }

  public getLista(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  public postItem(item: T): Observable<T> {
    return this.http.post<T>(this.url, item)
      .pipe(
        map(value => value),
        catchError(err => {
          this.showMessage('Ocorreu um erro na inclusão: ' + err.message, true);
          return EMPTY;
        })
      );
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
