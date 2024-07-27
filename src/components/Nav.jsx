import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { DarkModeToggle } from ".";

const Nav = () => {
  return (
    <header className='padding-x py-8 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray dark:text-gray-300'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/' className="dark:text-gray-300">Sign in</a>
          <span className="dark:text-gray-300">/</span>
          <a href='/' className="dark:text-gray-300">Explore now</a>
        </div>
        <div className='flex items-center gap-2'>
          <DarkModeToggle />
          <div className='hidden max-lg:block'>
            <img src={hamburger} alt='hamburger icon' width={25} height={25} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;