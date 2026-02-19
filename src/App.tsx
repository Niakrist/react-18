import { useId } from "react";
import { Mike } from "./example/mike/Mike";

function App() {
  const id = useId();
  return (
    <div>
      {/* <Batching /> */}
      {/* <FlushSync /> */}
      {/* <ConcurrentModeTransition /> */}
      {/* <ConcurrentModeDeferredValue /> */}
      {id}
      {id}
      {id}
      {id}
      {id}
      {id}
      <Mike />
    </div>
  );
}

export default App;
