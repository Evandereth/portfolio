import Description from "./components/Description"
import Experience from "./components/Experience"
import Profile from "./components/Profile"


function App() {

  return (
   <>
    <div className="w-[95%] mx-auto">
      <section className="components-bg">
        <Profile />
      </section>
      <section className="components-bg">
        <Description />
      </section>
      <section>
        <Experience />
      </section>
    </div>
   </>
  )
}

export default App
