export interface ObjLike {
  [propName: string]: any;
}

export interface Event {
  name: string;
  handlers: Handler[];
}

export interface Handler {
  id: number;
  handler: Function;
}
