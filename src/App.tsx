import { ReactElement } from "react";
import "./App.css";
import { Todo } from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";
const App = (): ReactElement => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Todo />
      </QueryClientProvider>
    </>
  );
};

export default App;
