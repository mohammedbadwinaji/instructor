import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

export type Theme = "dark" | "light";
export type ThemeContext = {
	theme: Theme;
	toggleTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContext>({
	theme: "light",
	toggleTheme: () => {},
});

type ThemeContextProvider = {
	children: ReactNode;
};
export const ThemeContextProvider = ({ children }: ThemeContextProvider) => {
	const [theme, setTheme] = useState<Theme>(
		(window.localStorage.getItem("theme") as Theme) || "light"
	);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.body.classList.toggle("dark");
		window.localStorage.setItem("theme", newTheme);
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return { theme, toggleTheme };
};
