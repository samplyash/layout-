// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'product',
      title: 'Product',
      type: 'item',
      url: '#',
      icon: icons.DashboardOutlined,
      breadcrumbs: true
    },
    {
      id: 'customer',
      title: 'Customer',
      type: 'item',
      url: '#',
      icon: icons.DashboardOutlined,
      breadcrumbs: true
    },
    {
      id: 'income',
      title: 'Income',
      type: 'item',
      url: '#',
      icon: icons.DashboardOutlined,
      breadcrumbs: true
    },
    {
      id: 'help',
      title: 'Help',
      type: 'item',
      url: '#',
      icon: icons.DashboardOutlined,
      breadcrumbs: true
    }
  ]
};

export default dashboard;
