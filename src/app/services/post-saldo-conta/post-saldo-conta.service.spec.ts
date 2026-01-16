import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { PostSaldoService } from './post-saldo-conta.service';
import { provideHttpClient } from '@angular/common/http';

describe('PostSaldoContaService', () => {
  let service: PostSaldoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(), provideHttpClient()]
    });
    service = TestBed.inject(PostSaldoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
