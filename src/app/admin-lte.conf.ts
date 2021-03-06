export const adminLteConf = {
  skin: 'purple',
 //  isSidebarLeftCollapsed: false,
 // isSidebarLeftExpandOnOver: false,
 //  isSidebarLeftMouseOver: false,
 //  isSidebarLeftMini: true,
 //   sidebarRightSkin: 'light',
 //   isSidebarRightCollapsed: true,
 //   isSidebarRightOverContent: true,
 //  layout: 'normal',
  sidebarLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    {label: 'داشبورد', route: '/', iconClasses: 'fa fa-road', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    {label: 'کاربران', route: 'users', iconClasses: 'fa fa-tasks' , pullRights: [{text: 'جدید', classes: 'label pull-right bg-red'}]},

      {label: 'منو ها', iconClasses: 'fa fa-th-list', children: [
           {label: 'منو جدید', route: 'menus/newMenu'},
           {label: 'همه منوها', route: 'menus/listMenu'},
           ]},

      {label: 'نوشته ها', iconClasses: 'fa fa-file-text', children: [
          {label: 'نوشته جدید', route: 'posts/single'},
          {label: 'همه نوشته ها', route: 'posts/list'},
          {label: 'دسته بندی', route: 'posts/category'},
        ]}


    // {label: 'Layout', iconClasses: 'fa fa-th-list', children: [
    //     {label: 'Configuration', route: 'layout/configuration'},
    //     {label: 'Custom', route: 'layout/custom'},
    //     {label: 'Header', route: 'layout/header'},
    //     {label: 'Sidebar Left', route: 'layout/sidebar-left'},
    //     {label: 'Sidebar Right', route: 'layout/sidebar-right'},
    //     {label: 'Content', route: 'layout/content'}
    //   ]},
    // {label: 'COMPONENTS', separator: true},
    // {label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
    // {label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
    // {label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
    //     {label: 'Default Box', route: 'boxs/box'},
    //     {label: 'Info Box', route: 'boxs/info-box'},
    //     {label: 'Small Box', route: 'boxs/small-box'}
    //   ]},
    // {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    // {label: 'Form', iconClasses: 'fa fa-files-o', children: [
    //     {label: 'Input Text', route: 'form/input-text'}
    // ]},
    // {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'}
  ]
};
