import { CommentService } from '../state/comment.service';
import { Comment } from 'src/app/comment/state/comment.model';
import { ID } from '@datorama/akita';
import { Command } from 'src/app/command';

export class AddComment implements Command {
    private commentService: CommentService;
    private commentId: ID;

    constructor(commentService: CommentService, id: ID) {
        this.commentService = commentService;
        this.commentId = id;
    }

    execute(): void {
        this.commentService.remove(this.commentId);
    }
}
