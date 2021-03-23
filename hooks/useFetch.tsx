import { useEffect, useState } from "react";
import { fetchById } from "../redux/actions/users";
import { User } from "../redux/reducer/usersReducer";
import { useDispatch } from "react-redux";

const useFetch = (id, callback?) => {
	const [item, setItem] = useState<User>({
		id: "",
		image: "",
		name: "",
		bio: "",
		description: "",
	});

	const dispatch = useDispatch();

	useEffect(() => {
		// check for id and fetch form details
		if (id) {
			dispatch(
				fetchById(id, (data: User) => {
					setItem(data);
					if (callback) callback(data);
				})
			);
		}
	}, []);

	return { item };
};

export default useFetch;
