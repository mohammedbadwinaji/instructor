import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeContextProvider>
				<AuthContextProvider>
					<RouterProvider router={router} />
				</AuthContextProvider>
			</ThemeContextProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
