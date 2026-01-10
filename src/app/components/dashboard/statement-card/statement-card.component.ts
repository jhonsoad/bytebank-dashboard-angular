import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementListComponent } from '../statement-list/statement-list.component';
import { Transaction } from '../../../shared/interfaces/account.interface';
import { DropdownComponent } from '../../common/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-statement-card',
  standalone: true,
  imports: [
    CommonModule,
    StatementListComponent,
    DropdownComponent,
    FormsModule
  ],
  templateUrl: './statement-card.component.html',
  styleUrl: './statement-card.component.css'
})
export class StatementCardComponent implements OnInit, OnChanges {
  @Input() transactions!: Transaction[] | null;
  @Input() accountId!: string | null;

  filteredTransactions: Transaction[] | null = null;
  searchQuery: string = '';
  filterType: string = '';

  constructor(
  ) { }

  ngOnInit(): void {
    this.applyFilters();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['transactions']) {
      this.applyFilters();
    }
  }

  applyFilters(): void {
    if (!this.transactions) {
      this.filteredTransactions = null;
      return;
    }

    let tempTransactions = this.transactions;

    if (this.filterType) {
      tempTransactions = tempTransactions.filter(t => t.type === this.filterType);
    }

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      tempTransactions = tempTransactions.filter(t =>
        (t.anexo && t.anexo.toLowerCase().includes(query)) ||
        (t.from && t.from.toLowerCase().includes(query)) ||
        (t.to && t.to.toLowerCase().includes(query))
      );
    }

    this.filteredTransactions = tempTransactions;
  }
}
