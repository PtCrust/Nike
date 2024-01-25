import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants/index"

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full ">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className="flex  w-2/5 m-auto justify-around items-center pag-16 max-lg:hidden">
                    {navLinks.map((item) => {
                        return <li key={item.label}><a href={item.href} className="
                        font-montserrat
                        leading-normal
                        text-lg
                        text-slate-500">
                            {item.label}
                        </a></li>
                    })}
                </ul>
                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="Humburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav
Nav