import Alternative from "./components/Alternative"
import Description from "./components/Description"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Interest from "./components/Interest"
import Profile from "./components/Profile"
import Skills from "./components/Skills"
import Socials from "./components/Socials"
import Alt from "./components/Socials"


function App() {

  return (
   <>
    <div className="w-[95%] mx-auto md:flex md:flex-row md:justify-center md:items-start md:gap-5 lg:gap-5">
      <div className="md:w-[60%]">
        <div className="w-full xl:flex xl:flex-row xl:justify-center xl:items-center xl:gap-5">
          <section className="components-bg xl:w-[50%] lg:h-60 xl:h-50">
            <Profile />
          </section>
          <section className="components-bg xl:w-[50%] lg:h-60 xl:h-50">
            <Description />
          </section>
        </div>
        

        <section className="components-bg">
          <Socials />
        </section>
        
        <section>
          <Experience />
        </section>
        
      </div>

      <div className="md:w-[35%]">
        <section className="components-bg">
          <Skills />
        </section>

        <section className="components-bg">
          <Interest />
        </section>

        <section className="components-bg">
          <Alternative />
        </section>
      </div>
      
      
    </div>
    <Footer />
   </>
  )
}

export default App
