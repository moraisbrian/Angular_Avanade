import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.texto.cabecalho = 'Aplicação produtos';
  }

  @ViewChild('textoCabecalho') private texto: any;
}
