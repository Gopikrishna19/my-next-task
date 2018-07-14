import t from 'tcomb';

export const Toasts = t.list(t.String, 'Toasts');

export const defaultToasts = new Toasts([]);

Toasts.addToast = (toasts, toast) => Toasts.update(toasts, {$push: [toast]});
Toasts.removeOldestToast = toasts => Toasts.update(toasts, {$splice: [[0, 1]]});
