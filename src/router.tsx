import { Navigate, createBrowserRouter } from "react-router-dom";
import Courses from "./pages/Courses";
import MainLayout from "./components/layout/MainLayout";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to={"/instructor/"} />,
	},
	{
		path: "/instructor/",
		element: <Navigate to={"/instructor/courses"} />,
	},
	{
		path: "/instructor/",
		element: <MainLayout />,
		children: [
			{
				path: "courses",
				element: <Courses />,
			},
			{
				path: "messages",
				element: <Messages />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "editprofile",
				element: <EditProfile />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
			{
				path: "settings",
				element: <Settings />,
			},
		],
	},

	{
		path: "/instructor/login",
		element: <Login />,
	},
	{
		path: "/instructor/register",
		element: <Signup />,
	},
	{
		path: "*",
		element: <PageNotFound />,
	},
]);
