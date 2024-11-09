import { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom";

interface Props {
    path: string;
    children: ReactNode;
    icon: ReactNode;
    role: 'Administrador' | 'Empleado';
}

export const SideMenuItem = ({ children, icon, path }: Props) => {

    const { pathname } = useLocation();

    return (
        <Link to={ path } className={`sidemenu__link ${pathname == path ? "sidemenu__link--active" : 'sidemenu__link'}`}>
            <span>{ icon }</span>
            <span>
                { children }
            </span>
        </Link>
    )
}