export interface Comment {
	id: number;
	content: string;
	createdDate: string;
	userId: number;
	articleId: number;
	likeUserId: number;
	likes:[{
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
	}]

}

const comment: any = {
	id: '1',
	content: "test",
	createdDate: "2022",
	userId: "1",
	articleId: "1",
	likeUserId: '1',
	likes: [{
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
	}]
	
}
