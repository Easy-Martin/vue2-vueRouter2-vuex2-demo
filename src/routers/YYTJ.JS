export const YYTJ = {
  path: '/yyOrder',
  component: resolve => {
    require(['../components/YYTJ/yy_order'], resolve)
  },
  children: [
    {
      path: 'qbdd',
      component: resolve => {
        require(['../components/YYTJ/qbdd'], resolve)
      }
    },
    {
      path: 'ycx',
      component: resolve => {
        require(['../components/YYTJ/ycxdd'], resolve)
      }
    },
    {
      path: 'yyy',
      component: resolve => {
        require(['../components/YYTJ/yyydd'], resolve)
      }
    },
    {
      path: 'ytj',
      component: resolve => {
        require(['../components/YYTJ/ytjdd'], resolve)
      }
    }
  ]
}

export const YYTJ_MSG = {
  path: '/tj/:orederId',
  name: 'yymsg',
  component: resolve => {
    require(['../components/YYTJ/yy_order_msg'], resolve)
  }
}
