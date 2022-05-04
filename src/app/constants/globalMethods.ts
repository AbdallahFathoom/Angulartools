import { formatDate } from '@angular/common';

export const formatYYYYDDMM = (date: Date): string =>
  formatDate(date, 'yyyy-MM-dd', 'en_US');
