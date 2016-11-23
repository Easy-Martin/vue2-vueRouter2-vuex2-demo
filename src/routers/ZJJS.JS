export const ZJJS = {
  path: '/zjOrder',
  component: resolve => {
    require(['../components/ZJJS/zj_order'], resolve)
  },
  children: [
    {
      path: 'qbdd',
      component: resolve => {
        require(['../components/ZJJS/qbdd'], resolve)
      }
    },
    {
      path: 'yzfdd',
      component: resolve => {
        require(['../components/ZJJS/yzfdd'], resolve)
      }
    },
    {
      path: 'dzfdd',
      component: resolve => {
        require(['../components/ZJJS/dzfdd'], resolve)
      }
    },
    {
      path: 'yqxdd',
      component: resolve => {
        require(['../components/ZJJS/yqxdd'], resolve)
      }
    },
    {
      path: 'tkdd',
      component: resolve => {
        require(['../components/ZJJS/tkdd'], resolve)
      }
    }
  ]
}
