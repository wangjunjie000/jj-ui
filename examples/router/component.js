import jjDrawer from '../views/jj-drawer/jj-drawer'
import jjButton from '../views/jj-button/jj-button'
import jjIcon from '../views/jj-icon/jj-icon'
import messageBox from '../views/message-box/message-box'

import installation from '../views/installation/installation'

export default [
  {
    path: '/component/installation',
    name: 'installation',
    component: installation,
    meta: {
      title: '组件|JJ-UI',
    },
  },
  {
    path: '/component/drawer',
    name: 'jjDrawer',
    component: jjDrawer,
    meta: {
      title: '组件|JJ-UI',
    },
  },
  {
    path: '/component/button',
    name: 'jjButton',
    component: jjButton,
    meta: {
      title: '组件|JJ-UI',
    },
  },
  {
    path: '/component/icon',
    name: 'jjIcon',
    component: jjIcon,
    meta: {
      title: '组件|JJ-UI',
    },
  },
  {
    path: '/component/messageBox',
    name: 'messageBox',
    component: messageBox,
    meta: {
      title: '组件|JJ-UI',
    },
  },

]
