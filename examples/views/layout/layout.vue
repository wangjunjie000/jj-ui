<template>
  <div class="home">
    <div class="header">
      <div class="container">
        <span class="title">JJ-UI</span>
      </div>
    </div>
    <div class="main">
      <!-- 左侧菜单栏 -->
      <div class="sidebar">
        <ul>
          <li :key="item_1.title" class="nav-item" v-for="item_1 in ul_data">
            <a>{{ item_1.title }}</a>

            <ul class="pure-menu-list" v-if="item_1.li_data.length != 0">
              <li :key="item_2.path" class="nav-item" v-for="item_2 in item_1.li_data">
                <div class="nav-group__title" v-if="item_2.group">{{ item_2.group }}</div>
                <a :class="{ active: active == item_2.path }" @click="handleMenuClick(item_2.path)">{{ item_2.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- 右侧内容 -->
      <div class="content" id="router_view_box">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
      active: 1,

      ul_data: [
        {
          title: '开发指南',
          li_data: [{  name: '安装/快速上手', path: '/component/installation' }],
        },
        {
          title: '组件',
          li_data: [
            {
              // id: 'button',
              group: '通用',
              name: 'Button 按钮',
              path: '/component/button',
            },
            {
              // id: 'icon',
              name: 'Icon 图标',
              path: '/component/icon',
            },

            {
              // id: 'messageBox',
              group: '通知',
              name: 'MessageBox 弹窗',
              path: '/component/messageBox',
            },

            {
              // id: 'drawer',
              group: '其他',
              name: 'Drawer 抽屉',
              path: '/component/drawer',
            },
          ],
        },
      ],
      sidebarHover: false,
    }
  },
  watch: {
    $route: function (to, from) {
      if (from.path != to.path) {
        document.documentElement.scrollTop = 0
      }
    },
  },

  mounted() {
    // console.log(this.$route)
    this.active = this.$route.path
  },

  methods: {
    handleMenuClick(path) {
      // console.log(path)
      this.active = path
      this.$router.push(path)
    },
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .header {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #fff;
    .container {
      height: 100%;
      width: 1140px;
      margin: 0 auto;
      padding: 0 10px;
      border-bottom: 1px solid #dcdfe6;
      .title {
        color: $--color-primary;
        font-size: 26px;
        font-weight: 500;
        font-family: '微软雅黑';
      }
    }
  }
  .main {
    position: relative;
    width: 1140px;
    height: -webkit-calc(100% - 80px);
    height: -moz-calc(100% - 80px);
    height: calc(100% - 80px);
    margin: 0 auto;
    padding: 10px 0;
    top: 80px;
    display: flex;
    // transform: translate(0, 0);
    // overflow: auto;
    // visibility: hidden;
    // &:focus,
    // &:hover {
    //   visibility: visible;
    // }
    .sidebar {
      position: fixed;
      margin-right: 40px;
      width: 200px;
      height: 80%;
      top: 135px;
      visibility: hidden;
      overflow: auto;
      &:hover {
        visibility: visible;
      }
      > ul {
        visibility: visible;
      }
      .nav-item {
        list-style: none;
        a {
          font-size: 15px;
          color: #333;
          line-height: 40px;
          height: 40px;
          margin: 0;
          padding: 0;
          text-decoration: none;
          display: block;
          position: relative;
          transition: 0.15s ease-out;
          font-weight: 700;
        }
        .nav-group__title {
          font-size: 12px;
          color: #999;
          line-height: 26px;
          margin-top: 15px;
        }
        .pure-menu-list {
          a {
            display: block;
            height: 40px;
            color: #444;
            line-height: 40px;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 400;
            &:hover {
              color: $--color-primary;
            }
          }
          .active {
            color: $--color-primary;
          }
        }
      }
    }
    .content {
      flex: 1;
      width: 100%;
      padding: 0 0 0 10px;
      margin-left: 240px;
    }
  }
}
</style>
