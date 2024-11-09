
import { useUIStore } from '../..'
import { Store01Icon } from 'hugeicons-react'
import { sideMenuOptions } from '../../../../config/side-menu-options';
import { SideMenuItem } from './SideMenuItem';

export const SideMenu = () => {

    const isSideMeunuOpen = useUIStore(state => state.isSideMenuOpen);

    return (
        <>
            {
                isSideMeunuOpen && (
                    <div 
                        className='sidemenu--background'
                    />
                )
            }

            <aside className={isSideMeunuOpen ? 'sidemenu sidemenu-active' : 'sidemenu'}>
                <div className='sidemenu--header'>
                    <div className='sidemenu--logo'>
                        <Store01Icon />
                    </div>
                    <h3>React POS</h3>
                </div>
                <ul className='flex flex-col gap-2'>
                    {
                        sideMenuOptions.map((option, index) => (
                            <li key={index}>
                                <SideMenuItem
                                    icon={option.icon}
                                    path={option.path}
                                    role={option.role}
                                >
                                    {option.name}
                                </SideMenuItem>
                            </li>
                        ))
                    }
                </ul>
            </aside>
        </>
    )
}