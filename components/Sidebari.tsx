import { BiLogoLinkedin, BiLogoGithub, BiLogoWhatsapp } from 'react-icons/bi'

const Sidebari = () => {
  return (
    <aside className="sticky top-0 bg-white h-[100vh] overflow-y-auto">
      <div className='flex flex-col justify-center gap-5 p-3 asider'>
        <a href="https://www.linkedin.com/in/leidy-castaño-castaño-ing-sistemas" target="_blank" rel="noopener noreferrer">
          <div className="p-2 bg-[#aae5db] rounded-full text-4xl custom-button-social hover:cursor-pointer">
            <BiLogoLinkedin />
          </div>
        </a>

        <a href="https://github.com/leidycas017" target="_blank" rel="noopener noreferrer">
          <div className=" p-2 bg-[#aae5db] rounded-full text-4xl custom-button-social hover:cursor-pointer">
          <BiLogoGithub />
          </div>
        </a>

        <a href="https://wa.me/+573148277136" target="_blank" rel="noopener noreferrer">
          <div className=" p-2 bg-[#aae5db] rounded-full text-4xl custom-button-social hover:cursor-pointer">
          <BiLogoWhatsapp />
          </div>
        </a>
        


      </div>



    </aside>
  )
}

export { Sidebari }