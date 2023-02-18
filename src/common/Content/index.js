import { Loading } from "./Loading";
import { Error } from "../Error";
import { NoResults } from "./NoResults";

export const Content = ({ status, children, message }) => {
  switch (status) {
    case "loading":
      return <Loading message={message}/>
    
    case "no results":
      return <NoResults message={message}/>

    case "error":
      return <Error />
    
    case "success":
      return children;

    case "initial":
      return null;

    default:
      throw new Error("Incorrect status");
  }
};