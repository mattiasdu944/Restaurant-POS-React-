import { ReactNode } from "react";
import { ChartLineData03Icon, Home01Icon, Invoice01Icon, UserGroupIcon } from "hugeicons-react";

interface SideMenuOption {
    name: string;
    path: string;
    icon: ReactNode;
    role: 'Administrador' | 'Empleado';
}

export const sideMenuOptions: SideMenuOption[] = [
    {
        name: 'Inicio',
        path: '/admin/menu',
        icon: <Home01Icon size={ 22 }/>,
        role: 'Empleado',
    },
    {
        name: 'Ordenes',
        path: '/admin/orders',
        icon: <Invoice01Icon  size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Usuarios',
        path: '/admin/users',
        icon: <UserGroupIcon size={ 22 }/>,
        role: 'Administrador',
    },
    {
        name: 'Reportes',
        path: '/admin/sales',
        icon: <ChartLineData03Icon size={ 22 }/>,
        role: 'Administrador',
    },
]