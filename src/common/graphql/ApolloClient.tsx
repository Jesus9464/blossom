import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_RICK,
  cache: new InMemoryCache(),
});

const ApolloClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ApolloProvider client={client}>{children}</ApolloProvider>;

export default ApolloClientProvider;
