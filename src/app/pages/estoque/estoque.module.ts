import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { EstoqueDashboardComponent } from './estoque-dashboard/estoque-dashboard.component';

@NgModule({
  declarations: [ListaProdutosComponent, EstoqueDashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListaProdutosComponent
  ]
})
export class EstoqueModule { }
