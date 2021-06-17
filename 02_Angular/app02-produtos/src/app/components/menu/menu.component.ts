import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.usuario = changes.usuario.currentValue;
  }

  ngOnInit() {
  }

  @Input() usuario: string = 'Olá';
  @Output() novoEvento: EventEmitter<string> = new EventEmitter<string>();

  public executar(valor: string): void {
    this.novoEvento.emit(valor);
  }
}
