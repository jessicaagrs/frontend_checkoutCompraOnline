import CheckoutBox from "./components/checkout/CheckoutBox"
import { InformationBox } from "./components/checkout/desktop/InformationBox"

function App() {

  return (
    <main className="w-full h-screen flex">
      <InformationBox />
      <CheckoutBox />
    </main>
  )
}

export default App
