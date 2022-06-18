import { Colaborador } from './../../model/colaborador';
import { CadastroService } from './../../services/cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  colaboradores: Colaborador[] | undefined;

  constructor(private service: CadastroService) { }

  ngOnInit(): void {

  }

  cadastrarColaboradores(){
    this.service.cadastrarColaboradores().subscribe(data => {
      this.colaboradores = data;
    }), (error: any) => {
      console.log(error);
      alert("Um erro ocorreu");
    }
  }

}
