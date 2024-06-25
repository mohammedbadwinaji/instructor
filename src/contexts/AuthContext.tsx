import { ReactNode, createContext, useEffect, useState } from "react";

export type User = {
	firstName: string;
	lastName: string;
	email: string;
	id: string;
};

type UserContext = {
	user: null | User;
	token: null | string;
	setToken: (token: string) => void;
	setUser: (user: User) => void;
};
export const AuthContext = createContext<UserContext>({
	user: null,
	token: null,
	setUser: () => {},
	setToken: () => {},
});

type UserContextProviderProps = {
	children: ReactNode;
};
export const AuthContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, _setUser] = useState<User | null>(null);
	const [token, _setToken] = useState<string | null>(
		window.localStorage.getItem("ACCESS_TOKEN" || null)
	);

	useEffect(() => {
		window.localStorage.setItem("ACCESS_TOKEN", "123");
	});
	const setUser = (user: User) => {
		_setUser({ ...user });
	};
	const setToken = (token: string | null) => {
		_setToken(token);
		if (token) {
			window.localStorage.setItem("ACCESS_TOKEN", token);
		} else {
			window.localStorage.removeItem("ACCESS_TOKEN");
		}
	};

	return (
		<AuthContext.Provider value={{ user, setUser, token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};
