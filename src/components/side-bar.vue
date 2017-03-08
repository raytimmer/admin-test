<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <!--<ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
        <li class="active treeview">
          <a>
            <i class="fa fa-dashboard"></i><span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li class="active"><a><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
            <li><a><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
          </ul>
        </li>
        <li class="active treeview">
          <a>
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li class="active"><a href="index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
            <li><a href="index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
          </ul>
        </li>
        <li>
          <a href="pages/widgets.html">
            <i class="fa fa-th"></i> <span>Widgets</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span>
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Charts</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="pages/charts/chartjs.html"><i class="fa fa-circle-o"></i> ChartJS</a></li>
            <li><a href="pages/charts/morris.html"><i class="fa fa-circle-o"></i> Morris</a></li>
            <li><a href="pages/charts/flot.html"><i class="fa fa-circle-o"></i> Flot</a></li>
            <li><a href="pages/charts/inline.html"><i class="fa fa-circle-o"></i> Inline charts</a></li>
          </ul>
        </li>
        <li><a><i class="fa fa-book"></i><span>Documentation</span></a></li>
        <li class="header">LABELS</li>
        <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>-->
      <el-col>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
    </section>
  </aside>
</template>

<script>
  export default {
    name: 'sideBar'

  }

</script>

<style>
  .main-sidebar {
    position: absolute;
    top: 0px;
    left: 0;
    margin-top: 50px;
    min-height: calc(100% - 50px);
    width: 230px;
    background: #364150;
    /*z-index: -1;*/
  }

  .sidebar-menu {
    color: #fff;
  }

  .sidebar-menu > li {
    position: relative;
    margin: 0;
    padding: 0;
  }

  .sidebar-menu > li > a {
    position: relative;
    border-left: 3px solid transparent;
    color: #b8c7ce;
    padding: 12px 5px 12px 15px;
    display: block;
    font-size: 16px;
  }

  .sidebar-menu > li:hover > a {
    color: #fff;
    background: #1e282c;
    border-left-color: #3c8dbc;
  }

  .sidebar-menu > li > a > .fa {
    width: 20px;
  }

  .sidebar-menu li > a > .pull-right-container {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -7px;
  }

  .sidebar-menu > li.header {
    color: #4b646f;
    background: #1a2226;
    padding: 10px 25px 10px 15px;
    font-size: 12px;
  }

  .sidebar-menu .treeview-menu {
    display: none;
    padding: 0;
    margin: 0;
    padding-left: 5px;
  }

  .sidebar-menu > li > .treeview-menu {
    margin: 0 1px;
    background: #2c3b41;
  }

  .sidebar-menu .treeview-menu > li {
    margin: 0;
  }

  .treeview-menu > li > a {
    color: #8aa4af;
    padding: 10px 5px 10px 15px;
    display: block;
    font-size: 14px;
  }

  .treeview-menu > li.active > a, .treeview-menu > li > a:hover {
    color: #fff;
  }
</style>
