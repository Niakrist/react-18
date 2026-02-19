export enum EnumMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
