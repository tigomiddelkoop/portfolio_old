<aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="{{ url('adminlte') }}/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
                <p>Alexander Pierce</p>
                <!-- Status -->
                <a href="#"><i class="fa fa-circle text-warning"></i> Idle</a>
            </div>
        </div>

        <!-- search form (Optional) -->
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
            </div>
        </form>
        <!-- /.search form -->

        <!-- Sidebar Menu -->
        <
        <!-- /.sidebar-menu -->
        <ul class="sidebar-menu" data-widget="tree">
            <li class="header">Generic</li>
            <!-- Optionally, you can add icons to the links -->
            <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Skills</span></a></li>
            <li><a href="#"><i class="fa fa-link"></i> <span>Projects</span></a></li>
            <li><a href="#"><i class="fa fa-link"></i> <span>Contact info</span></a></li>
        </ul>
        <ul class="sidebar-menu" data-widget="tree">
            <li class="header">Forum</li>
            <!-- Optionally, you can add icons to the links -->
            <li><a href="#"><i class="fa fa-link"></i> <span>Categories</span></a></li>
            <li><a href="#"><i class="fa fa-link"></i> <span>Topics</span></a></li>
            <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Users</span></a></li>
            <li><a href="#"><i class="fa fa-link"></i> <span>Reports</span></a></li>
            <li class="treeview">
                <a href="#"><i class="fa fa-link"></i> <span>Punishments</span>
                    <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
                </a>
                <ul class="treeview-menu">
                    <li><a href="#">Warnings</a></li>
                    <li><a href="#">Bans</a></li>
                </ul>
            </li>
        </ul>
        <ul class="sidebar-menu" data-widget="tree">
        <li class="header">Blog</li>
        <!-- Optionally, you can add icons to the links -->
        <li class="active"><a href="{{ url('admin/blog') }}"><i class="fa fa-link"></i> <span>Posts</span></a></li>
        </ul>
    </section>
    <!-- /.sidebar -->
</aside>