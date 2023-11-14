import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Operaciones',
      separator: false,
      items: [
        {
          icon: 'assets/icons/dash.svg',
          label: 'Tableros',
          route: '/admin/dashboard',
        },
        {
          icon: 'assets/icons/upload.svg',
          label: 'Cargar archivos',
          route: '/admin/up',
        },
        {
          icon: 'assets/icons/table.svg',
          label: 'Tablas',
          route: '/admin/tables',
        },
      ],
    },
  ];
}
