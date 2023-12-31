// Import necessary dependencies
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MyComponent } from "../myComponent/MyComponent";

// Create a query client
const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <div>Home</div>
      <QueryClientProvider client={queryClient}>
        {/* Your application components go here */}
        <MyComponent/>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
