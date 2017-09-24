import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:Lista;

  constructor(
    public navCtril:NavController,
    public navParams:NavParams,
    public _listaDeseos:ListaDeseosService
  ) {

    this.idx = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");
  }

  ngOnInit() {}

  actualizar( item:ListaItem ){
    item.completado = !item.completado;

    this._listaDeseos.actualizarData();
  }
}
