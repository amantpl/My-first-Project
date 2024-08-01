import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen gap-16 px-6 py-3 bg-amber-50 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10">      
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App
