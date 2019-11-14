import { CommentService } from '../state/comment.service';
import { Comment } from 'src/app/comment/state/comment.model';
import { ID } from '@datorama/akita';

export class AddComment implements Command {
    private commentService: CommentService;
    private postId: ID;

    constructor(commentService: CommentService, id: ID) {
        this.commentService = commentService;
        this.postId = id;
    }

    execute(): void {
        this.commentService.removeComments(this.postId);
    }
}
