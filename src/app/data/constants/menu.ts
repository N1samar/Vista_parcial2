import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Operacion',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/admin/dashboard',
        },
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'Tareas',
          route: '/admin/task',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Operadores',
          route: '/admin/operator',
        },
      ],
    },
  ];
}
