import { AnyAction } from "redux";
import { FETCH_USERS } from "../types";

export interface User {
	id: string;
	image: string;
	name: string;
	bio: string;
	description: string;
}

const userList: User[] = [
	{
		id: "lskdjflskjdfe23243",
		name: "Marissa Lawren",
		image: "/images/people/darlene-chabrat.jpg",
		bio: "Customer Support",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur.",
	},
];

export const users = (state: User[] = userList, action: AnyAction) => {
	switch (action.type) {
		case FETCH_USERS:
			return action.data;

		default:
			return state;
	}
};
