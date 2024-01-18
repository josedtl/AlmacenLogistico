import { TestBed } from '@angular/core/testing';

import { TipoElementoService } from './tipo-elemento.service';

describe('TipoElementoService', () => {
  let service: TipoElementoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoElementoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
