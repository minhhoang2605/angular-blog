/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  postID?: string | null,
  content?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDFilterInput | null,
  postID?: ModelIDFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    id: string | null,
    title: string | null,
    content: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    id: string | null,
    title: string | null,
    content: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    id: string | null,
    title: string | null,
    content: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string | null,
    postID: string | null,
    content: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string | null,
    postID: string | null,
    content: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string | null,
    postID: string | null,
    content: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    id: string | null,
    title: string | null,
    content: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string | null,
      title: string | null,
      content: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string | null,
    postID: string | null,
    content: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string | null,
      postID: string | null,
      content: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string | null,
    title: string | null,
    content: string | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string | null,
    title: string | null,
    content: string | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string | null,
    title: string | null,
    content: string | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string | null,
    postID: string | null,
    content: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string | null,
    postID: string | null,
    content: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string | null,
    postID: string | null,
    content: string | null,
  } | null,
};
