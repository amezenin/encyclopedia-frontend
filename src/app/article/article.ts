export interface Article {
	id: number;
	title: string;
	content: string;
	createdDate: string;
	userId: number;
	commentList: [{
		id: number;
		content:string;
		createdDate: string;
		userId:number;
	}];

}

const article: any = {
	id: '1',
	title: 'test',
	content: "test",
	createdDate: "2022",
	userId: "1",
	commentList: [
		{
			id: '1',
			content: 'comment',
			createdDate: '2222',
			userId: '1'
		}
	]
	
}

