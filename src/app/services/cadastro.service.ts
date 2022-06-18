import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Colaborador } from '../model/colaborador';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http:HttpClient) { }

  cadastrarColaboradores(){
    return this.http.get<Colaborador[]>(`${environment.apiUrl}/cadastro`);
  }
}
