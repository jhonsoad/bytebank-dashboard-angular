import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

describe('App Routes', () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideHttpClient()
      ],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
  });

  it('should redirect empty path to /inicio', async () => {
    await harness.navigateByUrl('');
    const router = TestBed.inject(Router);
    
    expect(router.url).toBe('/inicio');
  });

});