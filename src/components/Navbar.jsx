import React, { useState } from "react";
import { styles } from "../styles";
import { menu, close } from "../assets";
import Mai from "../assets/Mai.webp";
import { navLinks } from "../constants";
import { Link } from "react-scroll";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to={"/"}
					className="flex items-center gap-2 "
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={Mai} className="w-9 h-9 object-contain" />
					<p className="text-white text-[18px] flex font-bold cursor-pointer">
						Mai &nbsp;
						<span className="mt-[3px]  font-medium md:tracking-wider  text-[15px] text-secondary  sm:tracking-tighter">
							{" "}
							| FrontEnd & cross PlateForm{" "}
						</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row md:gap-10 sm:gap-5 ">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title ? "text-white" : "text-secondary"
							} hover:text-white md:text-[18px] sm:text-[15px] font-medium cursor-pointer`}
						>
							<Link
								key={`${link.id}`}
								activeClass="active"
								smooth
								spy
								to={`${link.id}`}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>

				{/* mobile app responsive */}
				<div className=" sm:hidden flex flex-1 justify-end items-center cursor-pointer">
					<img
						src={toggle ? close : menu}
						className="w-[20px] h-[20px]"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
					>
						<ul className="list-none flex justify-end items-start flex-col  gap-4">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title ? "text-white" : "text-secondary"
									} font-poppins font-medium cursor-pointer text-[16px]`}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
								>
									<Link
										key={`${link.id}`}
										activeClass="active"
										smooth
										spy
										to={`${link.id}`}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
