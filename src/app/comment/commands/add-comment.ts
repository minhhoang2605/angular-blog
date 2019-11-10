import { CommentService } from '../state/comment.service';
import { Comment } from 'src/app/comment/state/comment.model';

export class AddComment implements Command {
    private commentService: CommentService;
    private comment: Comment;

    constructor(commentService: CommentService, comment: Comment) {
        this.commentService = commentService;
        this.comment = comment;
    }

    execute(): void {
        this.commentService.add(this.comment);
    }
}
