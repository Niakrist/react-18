import {
  Batching,
  ConcurrentModeDeferredValue,
  ConcurrentModeTransition,
  FlushSync,
} from "./example";

function App() {
  return (
    <div>
      {/* <Batching /> */}
      {/* <FlushSync /> */}
      {/* <ConcurrentModeTransition /> */}
      <ConcurrentModeDeferredValue />
    </div>
  );
}

export default App;
