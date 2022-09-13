function generateError(message: string, errorCode: number): never {
  throw { message, errorCode };
}

/*
In imperative languages, void can be thought of as a type containing a single value. Such languages do not provide a means to construct or consume this value, but a void function can be thought of as returning this trivial value.

In contrast never is a type containing no values, which means that a function with this return type can never return normally at all. This means either throwing an exception or failing to terminate.
*/
