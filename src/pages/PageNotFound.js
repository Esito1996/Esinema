import { Link } from "react-router-dom";
import { Button } from "../components";
import PageNotFoundImage from "../assets/images/404-pagenotfound.webp";
import { useEffect } from "react";

export const PageNotFound = ({title}) => {


  useEffect(()=>{
    document.title = `${title} / Cinemate`
  })

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-xl">
           <img className="rounded"  src={PageNotFoundImage} alt="pagenotfound" />
          </div>
        </div>
        <div className="flex justify-center m-4">
          <Link to='/'>
            <Button>BACK TO CINEMA</Button>
          </Link>
              </div>
      </section>
    </main>
  )
}
