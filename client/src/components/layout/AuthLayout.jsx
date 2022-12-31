import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authUtils from "../../utils/authUtils";


const AppLayout = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			const isAuth = await authUtils.isAuthenticated();
			if (!isAuth) {
				setLoading(false);
			} else {
				navigate("/");
			}
		};
		checkAuth();
	}, [navigate]);

	return (
		<div>
			<Outlet />
		</div>
	);
};

export default AppLayout;
