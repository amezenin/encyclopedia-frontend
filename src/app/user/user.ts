export interface User {
	id: number;
	login: string;
	password: string;
	firstName: string;
	lastName: string;
	email: string;
	active: boolean;
	roles: [{
		id: number;
		name:string;
	}];
	

}

const user: any = {
	id: '1',
	login: 'test',
	password: "test",
	fistName: "2022",
	lastName: "1",
	email: "email",
	active: "true",
	roles: [
		{
			id: '1',
			name: 'ROLE_ADMIN',
		}
	],
}
