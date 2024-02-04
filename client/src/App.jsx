import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navbar/Index";
import BackToTopButton from "./Components/BackToTop";

const client = new ApolloClient({
  uri: "/graphql",
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
