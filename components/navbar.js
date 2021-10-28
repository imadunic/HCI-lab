const navigationItems = [
    'Home',
    'About Us',
    'Showcase',
    'Blog',
    'Contact',
    'Sign In',
];

const NavBar = () => {
    return (
        <nav className="inline-flex justify-between list-none w-max">
            {navigationItems.map((item) => (
                <li
                    key={item}
                    className="w-36 py-4 font-normal text-2xl text-center text-purple-900 hover:text-white hover:bg-purple-900 cursor-pointer"
                >
                    {item}
                </li>
            ))}
        </nav>
    );
};

export default NavBar;
