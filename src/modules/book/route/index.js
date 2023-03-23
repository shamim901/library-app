const childRoutes = (prop) => [
  
  {
    path: 'book-request',
    name: prop + 'book_request',
    component: () => import('../pages/book-request/List.vue')
  },

  {
    path: 'book-reservation',
    name: prop + 'book_reservation',
    component: () => import('../pages/book-reservation/List.vue')
  }
]

const routes = [
  {
    path: '/book',
    name: 'book',
    component: () => import('@/layouts/BookLayout.vue'),
    children: childRoutes('book')
  }
]

export default routes