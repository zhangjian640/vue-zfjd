import Index from '@/components/index/index'
import List from '@/components/list/list'
import Detail from '@/components/detail/detail'

export default [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]
