import { PostService } from './post/state/post.service';
import { Router } from '@angular/router';
import { ID } from '@datorama/akita';
import { Post } from './post/state/post.model';
import { CommandInvoker } from './command-invoker';
import { UpdatePost } from './post/commands/update-post';
import { AddPost } from './post/commands/add-post';


export default class Utils {

    static getElementValue(doc: Document, elementId: string) {
        let element = doc.getElementById(elementId);
        return (element as HTMLInputElement).value;
    }
    
    static updatePost(postService: PostService, id: ID, post: Post) {
        const invoker = new CommandInvoker();
        invoker.setCommand(new UpdatePost(postService, id, post));
        invoker.doThing();
    }

    static addPost(postService: PostService, post: Post) {
        const invoker = new CommandInvoker();
        invoker.setCommand(new AddPost(postService, post));
        invoker.doThing();
    }
    
    static redirectTo(router: Router, link: string, id: ID = null) {
        if (id !== null) {
            router.navigate([`${link}/${id}`]);
        } else {
            router.navigate([`${link}`]);
        }
    }

}
