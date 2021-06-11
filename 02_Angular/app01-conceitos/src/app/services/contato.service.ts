import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../classes/contato.classe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

constructor(private http: HttpClient) { }

  private readonly url: string = 'http://localhost:3200/api/contatos';

  public getContatosWs(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.url);
  }

  public setContatoWs(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.url, contato);
  }
}
