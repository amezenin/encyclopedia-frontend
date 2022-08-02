export interface Comment {
	id: number;
	content: string;
	createdDate: string;
	userId: number;
	articleId: number;
	likes:[{
		userId: number
	}]

}

const comment: any = {
	id: '1',
	content: "test",
	createdDate: "2022",
	userId: "1",
	articleId: "1",
	likes: [{
		userId: '1'
	}]
	
}
