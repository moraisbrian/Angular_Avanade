import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ProdutosService } from './produtos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Produto } from '../classes/produto';

describe('ProdutosService', () => {
  let service: ProdutosService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let produto: Produto;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    service = TestBed.inject(ProdutosService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('teste de requisicao http', () => {
    produto = {
      _id: "60c7d688409db22f6c6a6d24",
      codigo: 30,
      descricao: "abcd",
      unidade: "kg",
      preco: 10,
      categoria: "ALIMENTACAO"
    };

    const url = 'http://localhost:3200/api/produtos';

    httpClient.get<Produto[]>(url)
      .subscribe((res: Produto[]) => expect(res[0]).toEqual(produto));

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');

    //req.flush(produto);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
