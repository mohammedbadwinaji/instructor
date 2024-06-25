import userInfo from "../../data/userInfo.json";
import userImage from "../../assets/images/course2.jpg";
import { useContext, useEffect, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { VideoCameraSlashIcon } from "@heroicons/react/24/outline";
import { TbMessageCircleDown } from "react-icons/tb";
import { router } from "../../router";
import { AuthContext } from "../../contexts/AuthContext";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMenu } from "react-icons/bi";

const navWidthBeforeExpand = "60px";
const navWidthAfterExpand = "180px";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

type NavigationItem = {
	name: string;
	to: string;
	current: boolean;
};
type Navigation = NavigationItem[];
const navigation: Navigation = [
	{ name: "Courses", to: `/instructor/courses`, current: true },
	{ name: "Messages", to: "/instructor/messages", current: false },
	{ name: "Contact", to: "/instructor/contact", current: false },
];

const userNavigation = [
	{ name: "Profile", to: "/instructor/profile", current: false },
	{ name: "Edit Profile", to: "/instructor/editprofile", current: false },
	{ name: "Setting", to: "/instructor/settings", current: false },
	{ name: "Log Out", to: "/instructor/login", current: false },
];

export default function MainLayout() {
	const { token } = useContext(AuthContext);
	const navElement = useRef<HTMLElement | null>(null);
	const userMenu = useRef<HTMLDivElement | null>(null);
	const mobileNavMenu = useRef<HTMLDivElement | null>(null);

	
	
	const shrinkNav = () => {
		(navElement.current as HTMLElement).style.width = navWidthBeforeExpand;
		navElement.current?.querySelectorAll("a span").forEach((el) => {
			el.classList.add("hidden");
		});
	};
	const expandNav = () => {
		(navElement.current as HTMLElement).style.width = navWidthAfterExpand;
		navElement.current?.querySelectorAll("a span").forEach((el) => {
			el.classList.remove("hidden");
		});
	};
	const toggleUserMenu = () => {
		userMenu.current?.classList.toggle("hidden");
	};

	const hideUserMenu = () => {
		userMenu.current?.classList.add("hidden");
	};

	const toggleMobileMenu = () => {
		mobileNavMenu.current?.classList.toggle("hidden");
	};
	const closeMobileNavMenu = () => {
		mobileNavMenu.current?.classList.add("hidden");
	};
	const logout = (ev: React.MouseEvent) => {
		ev.preventDefault();
		console.log("logout");
	};
	useEffect(() => {
		if (!token) {
			router.navigate("/instructor/login");
		}
	}, [token]);

	return (
		<div className="flex min-h-[100vh]  relative">
			{/* page navigation */}
			<div
				className={`min-h-full relative left-0 top-0 mr-0 md:mr-[60px] hidden md:block`}
			>
				<nav
					ref={navElement}
					onMouseEnter={expandNav}
					onMouseLeave={shrinkNav}
					className={`fixed left-0 top-0 z-50 items-start  flex-col  bg-slate-800  transition-all flex h-full`}
					style={{ width: navWidthBeforeExpand }}
				>
					<div className=" cursor-pointer w-full text-center p-3 hover:bg-gray-500">
						<img
							className="h-8 w-8 m-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
							alt="Your Company"
						/>
					</div>
					{navigation.map((link, ind) => {
						return (
							<NavLink
								key={ind}
								to={link.to}
								className={({ isActive }: { isActive: boolean }): string =>
									classNames(
										isActive ? "text-white bg-gray-500" : "",
										"flex  items-center py-4 px-2 border-b-slate-600 border-b-2  w-full text-center text-gray-300 transition font-bold hover:text-white hover:bg-gray-500"
									)
								}
							>
								{link.name === "Courses" && (
									<>
										<VideoCameraSlashIcon className="size-6 mr-2 ml-2 self-center" />
										<span className="hidden">{link.name}</span>
									</>
								)}
								{link.name === "Messages" && (
									<>
										<TbMessageCircleDown className="size-6 ml-2 mr-2" />
										<span className="hidden">{link.name}</span>
									</>
								)}
								{link.name === "Contact" && (
									<>
										<PhoneArrowDownLeftIcon className="size-6 ml-2 mr-2" />
										<span className="hidden">{link.name}</span>
									</>
								)}
							</NavLink>
						);
					})}
				</nav>
			</div>
			<div className="w-full min-h-full mt-0 md:mt-4 relative">
				{/* user navigation in Medium Screen */}
				<div className="items-center justify-end hidden md:flex pr-10 mb-5 shadow-sm pb-3">
					<IoMdNotificationsOutline className="size-8 mr-3 cursor-pointer" />
					<div
						onClick={toggleUserMenu}
						className="w-[50px] h-[50px] rounded-full cursor-pointer"
					>
						{userInfo.image && (
							<img
								src={userInfo.image}
								alt=""
								className="w-full h-full rounded-full "
							/>
						)}
						{!userInfo.image && (
							<img
								src={userImage}
								alt=""
								className="w-full h-full rounded-full "
							/>
						)}
					</div>
				</div>
				{/* user menu */}
				<div
					ref={userMenu}
					onMouseLeave={hideUserMenu}
					className="bg-slate-800 transition-all rounded-xl w-[140px] fixed z-50 right-[50px] top-[80px] hidden"
				>
					{userNavigation.map((link, index) => {
						return (
							<NavLink
								onClick={(ev) => {
									link.name === "Log Out" && logout(ev);
								}}
								key={index}
								to={`${link.to}`}
								className={({ isActive }: { isActive: boolean }): string =>
									classNames(
										isActive ? "text-white bg-gray-500" : "",
										"flex justify-center  items-center py-3 px-2 border-b-slate-600 border-b-2  w-full text-center text-gray-300 transition font-bold hover:text-white hover:bg-gray-500"
									)
								}
							>
								{link.name}
							</NavLink>
						);
					})}
				</div>
				<div className="block md:hidden bg-slate-800 h-[50px]">
					<button className="button h-full" onClick={toggleMobileMenu}>
						<BiMenu className="size-8 ml-5 text-white" />
						{""}
					</button>
				</div>
				{/* navigation for mobile screen */}

				<div ref={mobileNavMenu} className="hidden">
					<div
						className=" top-0 left-0 z-[100] fixed  bg-[#00000066] cursor-pointer h-[100vh] w-[100vw]"
						onClick={closeMobileNavMenu}
					></div>
					<nav className="fixed top-0 left-0 w-[250px] h-full z-[200] bg-white p-2  ">
						<div className="border-b-2 border-b-slate-200  pb-4">
							<div className="w-[50px] h-[50px] rounded-full cursor-pointer flex ">
								<span
									className="absolute -right-[70px] top-[30px] w-[40px] h-[40px] rounded-full bg-white hover:bg-gray-300 hover:text-white text-2xl flex justify-center items-center font-bold visible"
									onClick={closeMobileNavMenu}
								>
									X
								</span>
								{userInfo.image && (
									<img
										src={userInfo.image}
										alt=""
										className="w-full h-full rounded-full "
									/>
								)}
								{!userInfo.image && (
									<img
										src={userImage}
										alt=""
										className="w-full h-full rounded-full "
									/>
								)}
								<div className="ml-2">
									<h3 className="text-lg text-slate-500 font-bold">
										{userInfo.firstName} {userInfo.lastName}{" "}
									</h3>
									<h4 className="text-sm font-bold"> {userInfo.email} </h4>
								</div>
							</div>
						</div>
						{/* navigation Links */}
						<div className="border-b-2 border-b-slate-200  pb-4">
							{navigation.map((link, ind) => {
								return (
									<NavLink
										key={ind}
										to={link.to}
										className={({ isActive }: { isActive: boolean }): string =>
											classNames(
												isActive ? "text-white bg-slate-400" : "",
												"flex  items-center py-4 px-2   w-full text-center text-gray-400 transition font-bold hover:text-white hover:bg-slate-400"
											)
										}
									>
										{link.name === "Courses" && (
											<>
												<VideoCameraSlashIcon className="size-6 mr-2 ml-2 self-center" />
												<span>{link.name}</span>
											</>
										)}
										{link.name === "Messages" && (
											<>
												<TbMessageCircleDown className="size-6 ml-2 mr-2" />
												<span>{link.name}</span>
											</>
										)}
										{link.name === "Contact" && (
											<>
												<PhoneArrowDownLeftIcon className="size-6 ml-2 mr-2" />
												<span>{link.name}</span>
											</>
										)}
									</NavLink>
								);
							})}
						</div>
						{/* userNavigation Links */}
						<div className="">
							{userNavigation.map((link, index) => {
								return (
									<NavLink
										onClick={(ev) => {
											link.name === "Log Out" && logout(ev);
										}}
										key={index}
										to={`${link.to}`}
										className={({ isActive }: { isActive: boolean }): string =>
											classNames(
												isActive ? "text-white bg-slate-400" : "",
												"block py-4 px-2  w-full text-start    text-gray-400 transition font-bold hover:text-white hover:bg-slate-400"
											)
										}
									>
										{link.name}
									</NavLink>
								);
							})}
						</div>
					</nav>
				</div>
				<div className="p-2">
					<Outlet />
				</div>
				{/* footer  */}
				<div
					className="  w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  absolute top-full
				left-0"
				>
					<div className="flex flex-col bg-red-500">
						<span>one</span>
						<span>one</span>
						<span>one</span>
						<span>one</span>
						<span>one</span>
					</div>
					<div className="flex flex-col bg-green-500">
						<span>one</span>
						<span>one</span>
						<span>one</span>
						<span>one</span>
						<span>one</span>
					</div>
					<div className="flex flex-col bg-blue-500">
						<span>one</span>
						<span>one</span>
						<span>one</span>
						<span>one</span>
						<span>one</span>
					</div>
					<div className="flex flex-col bg-yellow-500">
						<span>one</span>
						<span>one</span>
						<span>one</span>
						<span>one</span>
						<span>one</span>
					</div>
				</div>
			</div>
		</div>
	);
}
