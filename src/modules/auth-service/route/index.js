// const childRoutes = (prop) => [
//   {
//     path: 'login',
//     name: prop + 'login',
//     component: () => import('../pages/sign-in/login.vue')
//   },
//   {
//     path: 'sign-up',
//     name: prop + 'sign_up',
//     component: () => import('../pages/sign-up/signup.vue')
//   }
// ]

const routes = [
  // {
  //   path: '/auth',
  //   name: 'auth',
  //   component: () => import('@/layouts/AuthLayout.vue'),
  //   children: childRoutes('auth')
  // }
    {
    path: '/login',
    name: 'login',
    component: () => import('../pages/sign-in/login.vue')
  },
  {
    path: '/sign-up',
    name: 'sign_up',
    component: () => import('../pages/sign-up/signup.vue')
  }
]

export default routes