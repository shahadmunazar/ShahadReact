export interface NavItem {
  id: number;
  path: string;
  title: string;
  icon: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: '/',
    title: 'Dashboard',
    icon: 'mingcute:home-1-fill',
    active: true,
  },
  {
    id: 2,
    path: '#!',
    title: 'Profile',
    icon: 'clarity:user-line',
    active: true,
  },
  {
    id: 3,
    path: '#!',
    title: 'Leaderboard',
    icon: 'material-symbols-light:leaderboard-outline',
    active: true,
  },
  {
    id: 4,
    path: '#!',
    title: 'Order',
    icon: 'ant-design:shopping-cart-outlined',
    active: true,
  },
  {
    id: 5,
    path: '#!',
    title: 'Product',
    icon: 'lets-icons:bag-alt-light',
    active: true,
  },
  {
    id: 6,
    path: '#!',
    title: 'Sales Report',
    icon: 'lucide:line-chart',
    active: true,
  },
  {
    id: 7,
    path: '#!',
    title: 'Message',
    icon: 'bi:chat',
    active: true,
  },
  {
    id: 8,
    path: '#!',
    title: 'Settings',
    icon: 'mingcute:settings-3-line',
    active: true,
  },
  {
    id: 9,
    path: '#!',
    title: 'Favourite',
    icon: 'clarity:favorite-line',
    active: true,
  },
  {
    id: 10,
    path: '#!',
    title: 'History',
    icon: 'ic:round-history',
    active: true,
  },
  {
    id: 11,
    path: 'authentication/login',
    title: 'Logins',
    icon: 'tabler:login',
    active: true,
  },
  {
    id: 12,
    path: 'authentication/sign-up',
    title: 'Sign Up',
    icon: 'tdesign:user-add',
    active: true,
  },
];

export default navItems;
