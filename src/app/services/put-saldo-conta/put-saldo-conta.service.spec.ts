import { TestBed } from '@angular/core/testing';

import { PutSaldoContaService } from './put-saldo-conta.service';
import { provideHttpClient } from '@angular/common/http';

describe('PutSaldoContaService', () => {
  let service: PutSaldoContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(PutSaldoContaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
