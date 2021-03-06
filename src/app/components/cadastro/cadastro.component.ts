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
  colaboradorParaView: Colaborador | undefined;
  modalViewColaborador: boolean | undefined;

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

  visualizarColaborador(index:number){
    this.colaboradorParaView = this.colaboradores != undefined ? this.colaboradores[index] : undefined;
    this.toggleModalViewColaborador();
  }

  toggleModalViewColaborador(){
    this.modalViewColaborador = !this.modalViewColaborador;
  }

}
