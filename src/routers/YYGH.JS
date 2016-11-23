export const YYGH = {
  path: '/ghOrder',
  component: resolve => {
    require(['../components/YYGH/gh_order'], resolve)
  },
  children: [
    {
      path: 'qbdd',
      component: resolve => {
        require(['../components/YYGH/qbdd'], resolve)
      }
    },
    {
      path: 'yzfdd',
      component: resolve => {
        require(['../components/YYGH/yzfdd'], resolve)
      }
    },
    {
      path: 'dzfdd',
      component: resolve => {
        require(['../components/YYGH/dzfdd'], resolve)
      }
    },
    {
      path: 'yqxdd',
      component: resolve => {
        require(['../components/YYGH/yqxdd'], resolve)
      }
    },
    {
      path: 'tkdd',
      component: resolve => {
        require(['../components/YYGH/tkdd'], resolve)
      }
    }
  ]
}
