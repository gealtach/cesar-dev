import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import UpperBar from "./components/UpperBar";
import { Roboto_Mono, Source_Code_Pro } from 'next/font/google';


const sourceCodePro = Source_Code_Pro({
  subsets: ['cyrillic'],
  variable: '--font-sourceCodePro'
});

const roboto = Roboto_Mono({
  subsets: ['cyrillic'],
  variable: '--font-roboto'
});

export default function Home() {
  return (
    <div className={`flex flex-col text-white bg-black m-4 p-2 ${roboto.variable} ${sourceCodePro.variable}`}>
      <div className="relative"> 
        <div className="fixed top-3 left-3 right-3 bg-black py-2">
          <UpperBar />
        </div>
        <div className="mt-24">
          <Landing />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  )
}
