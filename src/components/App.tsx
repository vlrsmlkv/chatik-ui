import React from "react";

interface AppProps {
  message: string;
};

const App = ({message}: AppProps) => (
  <>
    <h1>HEHE or NE HEHE?</h1>
    <p>{message}</p>
  </>
);

export default App;