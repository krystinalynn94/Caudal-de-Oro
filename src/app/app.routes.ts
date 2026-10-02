import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./home/home').then((m) => m.Home),
    },
    {
        path: 'expense',
        loadComponent: () =>
            import('./expense/expense').then((m) => m.Expense),
    },
    {
        path: 'budget',
        loadComponent: () =>
            import('./budget/budget').then((m) => m.Budget),
    },
    {
        path: 'sheets',
        loadComponent: () =>
            import('./sheets/sheets').then((m) => m.Sheets),
    },
    {
        path: 'data-metrics',
        loadComponent: () =>
            import('./data-metrics/data-metrics').then((m) => m.DataMetrics),
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
