// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    title
    content
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
    id
    title
    content
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
    id
    title
    content
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    postID
    content
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    postID
    content
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    postID
    content
  }
}
`;
