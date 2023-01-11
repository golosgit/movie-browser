import { Loading } from "./Loading";
import { Error } from "./Error";

export const Content = ({ status, children }) => {
  switch (status) {
    case "loading":
      return <Loading />
    
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