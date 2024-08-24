import Card from "./component/Card"
import Footer from "./component/Footer"
import Navbar from "./component/navbar"


function App() {


  return (
    <>
      <Navbar/>
       <Card title="card 1" description="card 1 description"/>
       <Card title="card 2" description="card 2 description"/>
       <Card title="card 3" description="card 3 description"/>
       <Card title="card 4" description="card 4 description"/>
      <Footer/>
    </>
  )
}

export default App
