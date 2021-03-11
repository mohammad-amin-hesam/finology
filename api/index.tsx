import { uniq_id } from "../helpers/props";

export default class api {
	getState: () => any;
	dispatch: (obj: {}) => any;
	db: [];

	constructor(obj) {
		const data = localStorage.getItem("users");
		this.getState = obj.getState;
		this.dispatch = obj.dispatch;
		this.db = data ? JSON.parse(data) : [];
	}

	Setter = (data) => {};

	GetAll = () => {};

	Get = () => {};

	Put = () => {};

	Post = (data) =>
		this.Setter([...this.db, { ...data, read: false, id: uniq_id() }]);

	Delete = (id) => this.Setter(this.db.filter((item: any) => item.id !== id));
}
