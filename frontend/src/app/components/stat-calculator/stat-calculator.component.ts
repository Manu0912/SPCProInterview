import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { StatisticsService } from '../../services/statistics.service';
import { StatisticsRequest, StatisticsResult } from '../../models/statistics';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-calculator',
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    ToastModule,
    CommonModule
  ],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stat-calculator.component.html',
  styleUrls: ['./stat-calculator.component.scss']
})
export class StatCalculatorComponent {
  lowerLimit!: number;
  upperLimit!: number;
  rawValues = '';
  result: StatisticsResult | null = null;
  loading = false;
  limitsSet = false;

  constructor(
    private statsService: StatisticsService,
    private messageService: MessageService
  ) {}

  validateLimits(): boolean {
    if (this.lowerLimit >= this.upperLimit) {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid Limits',
        detail: 'The upper limit must be greater than the lower limit.'
      });
      return false;
    }
    return true;
  }

  validateValues(): boolean {
    if (this.rawValues.includes(' ')) {
      this.messageService.add({
        severity: 'error',
        detail: 'Spaces are not allowed.'
      });
      return false;
    }

    // Split by comma and validate each value
    const values = this.rawValues.split(',');
    if (values.some(v => v === '')) {
      this.messageService.add({
        severity: 'error',
        detail: 'Values should be separated by single commas and not be empty.'
      });
      return false;
    }

    // Regex for a valid number (integer or decimal, positive or negative)
    const numberRegex = /^-?\d*(\.\d+)?$/;
    for (const val of values) {
      if (!numberRegex.test(val)) {
        this.messageService.add({
          severity: 'error',
          detail: 'Only numbers separated by commas are allowed.'
        });
        return false;
      }
    }

    return true;
  }

  setLimits() {
    if (!this.validateLimits()) {
      return;
    }
    this.limitsSet = true;
    this.messageService.add({
      severity: 'success',
      detail: 'Limits have been set successfully.'
    });
  }

  calculate(form: NgForm) {
    if (!this.limitsSet) {
      this.messageService.add({
        severity: 'warn',
        detail: 'Please set the limits first.'
      });
      return;
    }

    if (form.invalid) {
      this.messageService.add({
        severity: 'warn',
        detail: 'Please fill all fields correctly.'
      });
      return;
    }

    if (!this.validateValues()) {
      return;
    }

    const values = this.rawValues
      .split(',')
      .map(v => parseFloat(v.trim()))
      .filter(v => !isNaN(v));

    const payload: StatisticsRequest = {
      lowerLimit: this.lowerLimit,
      upperLimit: this.upperLimit,
      values
    };

    this.loading = true;
    this.statsService.calculateStats(payload).subscribe({
      next: res => {
        this.result = res;
        this.messageService.add({
          severity: 'success',
          detail: 'Calculation successful!'
        });
      },
      error: err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.message
        });
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}