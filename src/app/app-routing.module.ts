import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const cadastroModule = () => import ('./components/cadastro/cadastro.module').then(x => x.CadastroModule);

const routes: Routes = [
  {path: '', loadChildren: cadastroModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
