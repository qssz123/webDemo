/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/demo',
  component: Layout,
  redirect: '/demo/demo1',
  name: 'demo',
  meta: {
    title: 'Demo',
    icon: 'table'
  },
  children: [
    {
      path: 'demo1',
      component: () => import('@/views/demo/demo1'),
      name: 'demo1',
      meta: { title: 'demo1' }
    },
    {
      path: 'demo2',
      component: () => import('@/views/demo/demo2'),
      name: 'demo2',
      meta: { title: 'demo2' }
    },
    {
      path: 'demo3',
      component: () => import('@/views/demo/demo3'),
      name: 'demo3',
      meta: { title: 'demo3' }
    },
    {
      path: 'demo4',
      component: () => import('@/views/demo/demo4'),
      name: 'demo4',
      meta: { title: 'demo4' }
    },
    {
      path: 'demo5',
      component: () => import('@/views/demo/demo5'),
      name: 'demo5',
      meta: { title: 'demo5' }
    }
  ]
}
export default tableRouter
