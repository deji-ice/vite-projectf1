const NavBar = () => {
    return (
        <nav className="flex bg-[#fbebeb] justify-between items-center px-14 py-5   ">
            <div><img src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1705578412/react/Frame_289413_d5eii6.png" alt="" /></div>

            <div className="flex justify-between items-center gap-40">

                <div className="flex gap-10">
                    <p className="cursor-pointer">About</p>
                    <p className="cursor-pointer">Careers</p>
                    <p className="cursor-pointer">Contact us</p>
                </div>

                <div>
                    <button className="bg-green-400  rounded px-3 py-2">Sign Up</button>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;
