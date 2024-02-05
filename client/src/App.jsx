import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navbar/Index";
import BackToTopButton from "./Components/BackToTop";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="wrapper">
          <NavBar />
          <Outlet />
          <BackToTopButton />
        </div>
      </ApolloProvider>
    </>
  );
}
