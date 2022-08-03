export interface Article {
	id: number;
	title: string;
	content: string;
	createdDate: string;
	userId: number;
	likeUserId: number;
	commentList: [{
		id: number;
		content:string;
		createdDate: string;
		userId:number;
		likes:[{
			userId:number;
		}]
	}];
	likes: [{
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

const article: any = {
	id: '1',
	title: 'test',
	content: "test",
	createdDate: "2022",
	userId: "1",
	likeUserId: '1',
	commentList: [
		{
			id: '1',
			content: 'comment',
			createdDate: '2222',
			userId: '1',
			likes: [{
				userId: '1'
			}]
		}
	],
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

