import 'pages/setup';

export const routes = [
  // temporarily cast to any because of a Type bug with the router
  {
    path: (import.meta as any).env.BASE_URL,
    animate: true,
    children: [
      { path: '', component: 'app-setup' },
      {
        path: 'about',
        component: 'app-about',
        action: async () => {
          await import('pages/setup');
        },
      }
    ],
  } as any,
];