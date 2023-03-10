import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import NavItem, { NavItemProps } from './components/NavItem';
import { ReactComponent as MemoIcon } from '../../assets/icons/MemoIcon.svg';
import { ReactComponent as ChallengeIcon } from '../../assets/icons/ChallengeIcon.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/InfoIcon.svg';
import { APP_ROUTER } from '../../constants/constant';

const navs = [
    {
        label: '自分の記録',
        isActive: true,
        path: APP_ROUTER.MY_RECORD,
        icon: <MemoIcon />,
    },
    {
        label: 'チャレンジ',
        isActive: true,
        path: APP_ROUTER.MY_CHALLENGE,
        icon: <ChallengeIcon />,
    },
    {
        label: 'お知らせ',
        isActive: true,
        path: '',
        icon: <InfoIcon />,
        numberOfNoti: 1,
    },
];

function Header() {
    const location = useLocation();

    return (
        <header className="bg-midnight">
            <div className="mx-[160px] flex justify-between items-center">
                <Link to={APP_ROUTER.HOME} className="text-white font-bold text-lg">
                    <img className="w-[110px] cursor-pointer m-4" src={Logo} alt="logo" />
                </Link>
                <nav className="flex">
                    <ul className="flex">
                        {navs.map((nav, index) => (
                            <NavItem
                                key={`${nav.label}-${index}`}
                                isActive={location.pathname === nav.path}
                                label={nav.label}
                                path={nav.path}
                                icon={nav.icon}
                                numberOfNoti={nav?.numberOfNoti}
                            />
                        ))}
                    </ul>
                    <div>
                        <button className="relative group">
                            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 outline-none">
                                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                    <div className="bg-orange h-[3px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                                    <div className="bg-orange h-[3px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                                    <div className="bg-orange h-[3px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                                    <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                                        <div className="absolute bg-orange h-[3px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                                        <div className="absolute bg-orange h-[3px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
