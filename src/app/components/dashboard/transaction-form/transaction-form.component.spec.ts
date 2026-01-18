import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionFormComponent } from './transaction-form.component';
import { PostSaldoService } from '../../../services/post-saldo-conta/post-saldo-conta.service';
import { of } from 'rxjs';
import { TransactionType } from '../../../shared/interfaces/account.interface';

describe('TransactionFormComponent', () => {
  let component: TransactionFormComponent;
  let fixture: ComponentFixture<TransactionFormComponent>;
  let mockPostSaldoService: any;

  beforeEach(async () => {
    mockPostSaldoService = {
      addTransaction: jest.fn().mockReturnValue(of({} as any))
    };

    await TestBed.configureTestingModule({
      imports: [TransactionFormComponent],
      providers: [
        { provide: PostSaldoService, useValue: mockPostSaldoService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionFormComponent);
    component = fixture.componentInstance;
    component.accountId = '123';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error if value is null on submit', () => {
    component.value = null;
    component.handleSubmit();
    expect(component.errorMessage).toBe('Por favor, selecione o tipo e insira o valor.');
    expect(mockPostSaldoService.addTransaction).not.toHaveBeenCalled();
  });

  it('should call service with positive value for Credit', () => {
    component.value = 100;
    component.transactionType = TransactionType.Credit;
    component.handleSubmit();
    
    expect(mockPostSaldoService.addTransaction).toHaveBeenCalledWith(expect.objectContaining({
      type: TransactionType.Credit,
      value: 100
    }));
  });

  it('should call service with negative value for Debit', () => {
    component.value = 50;
    component.transactionType = TransactionType.Debit;
    component.handleSubmit();
    
    expect(mockPostSaldoService.addTransaction).toHaveBeenCalledWith(expect.objectContaining({
      type: TransactionType.Debit,
      value: -50
    }));
  });

  it('should emit transactionAdded event on success', () => {
    jest.spyOn(component.transactionAdded, 'emit');
    component.value = 100;
    component.handleSubmit();

    expect(component.transactionAdded.emit).toHaveBeenCalled();
    expect(component.value).toBeNull(); 
  });
});
