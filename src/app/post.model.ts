export class Post {
    id: string;
    title: string;
    content: string;
    likes: number;
    comments: number;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.id = '0';
        this.likes = 0;
        this.comments = 0;
    }
}
