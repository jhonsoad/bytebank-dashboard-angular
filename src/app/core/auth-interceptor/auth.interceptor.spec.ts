import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn, HttpClient, provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let client: HttpClient;
  let httpMock: HttpTestingController;
  let interceptor: AuthInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        AuthInterceptor
      ]
    });

    client = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    interceptor = TestBed.inject(AuthInterceptor);
    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header when token is present', () => {
    const token = 'fake-jwt-token';
    localStorage.setItem('authToken', token);

    client.get('/test').subscribe();

    const freq = httpMock.expectOne('/test');
    expect(freq.request.headers.has('Authorization')).toBe(true);
    expect(freq.request.headers.get('Authorization')).toBe(`Bearer ${token}`);
  });

  it('should not add Authorization header when token is missing', () => {
    client.get('/test').subscribe();

    const freq = httpMock.expectOne('/test');
    expect(freq.request.headers.has('Authorization')).toBe(false);
  });
});
