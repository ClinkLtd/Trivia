import 'pages/setup';

export const routes = [
  // temporarily cast to any because of a Type bug with the router
  {
    path: (import.meta as any).env.BASE_URL,
    animate: true,
    children: [
      { path: '', component: 'app-setup' },
      {
        path: 'set-frequency',
        component: 'set-frequency',
        action: async () => {
          await import('pages/frequency');
        },
      },
      {
        path: 'set-categories',
        component: 'set-categories',
        action: async () => {
          await import('pages/categories');
        },
      },
      {
        path: 'trivia',
        component: 'app-trivia',
        action: async () => {
          await import('pages/trivia');
        },
      }
    ],
  } as any,
];