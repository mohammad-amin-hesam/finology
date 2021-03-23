import { User } from "../reducer/usersReducer";

export const addUser = (user: User) => (dispatch, getState, { Api }) => {
	const api = new Api({ dispatch, getState });
	api.Post(user);
};

export const fetchUsers = () => (dispatch, getState, { Api }) => {
	const api = new Api({ dispatch, getState });
	api.GetAll();
};

export const fetchById = (id, callback: (User) => void) => (
	dispatch,
	getState,
	{ Api }
) => {
	const api = new Api({ getState, dispatch });
	const user: User = api.GetById(id);
	callback(user);
};

export const editById = (user: User) => (dispatch, getState, { Api }) => {
	const api = new Api({ dispatch, getState });
	api.Put(user);
};

export const deleteList = (data: string[], callback) => (
	dispatch,
	getState,
	{ Api }
) => {
	const api = new Api({ dispatch, getState });
	api.Delete(data);
	setTimeout(() => {
		callback();
	}, 10);
};
