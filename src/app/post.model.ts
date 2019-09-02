export class Post {
    postID: number;
    title: string;
    content: string;
    likes: number;
    posts: number;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.postID = 0;
        this.likes = 0;
        this.posts = 0;
    }
}
