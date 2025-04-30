import CodeEditorBox from "./components/CodeEditorBox.jsx"
import { Provider } from "@/components/ui/provider"
 
function App() {
  return (
    <>
      <Provider>
          <CodeEditorBox />
      </Provider>
    </>
  )
}
 
export default App