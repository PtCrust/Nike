import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex  justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="footerlogo"
              width={150}
              height={46}
              className="" />
          </a>
          <p className=" mt-6 text-base font-montserrat leading-7 text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your perfect Size In Store. Get Rewards.</p>
          <div className="flex items-center gap-5 mt-8 ">
            {
              socialMedia.map((icon) => (
                <div key={icon.src} className="flex  justify-center items-center w-12 h-12 bg-white  rounded-full">
                  <img src={icon.src} alt={icon.alt}
                    width={24}
                    height={24}
                    className=" " />
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-1  justify-between  lg:gap-10 gap-20 flex-wrap">
          {
            footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white leading-normal font-medium mb-6 text-2xl font-montserrat">{section.title}</h4>
                <ul>
                  {
                    section.links.map((link) => (
                      <li key={link.name}
                        className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-50"
                      >
                        <a href={link.link}>{link.name}</a></li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex justify-between  mt-24  text-white-400 max-sm:flex-col max-sm:items-center ">
        <div className=" flex flex-1  justify-start items-center  font-montserrat gap-2 ">
          <img src={copyrightSign}
          width={20}
          height={20}
          alt="copyrightSign" 
          className=" rounded-full m-0"/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
