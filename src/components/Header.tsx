import Link from "next/link";
import * as motion from "framer-motion/client";
const Header = () => {
  return (
    <motion.div initial={{opacity:0.9,y:-20}} whileInView={{opacity:1,y:0}} transition={{delay:0.3}}  className="flex justify-between p-8 bg-back items-center">
      <Link href={"/"} className="text-3xl font-bold text-blue-700">DB<span className="text-white">IT</span></Link>
      <Link href={"/login"}><button className="w-[140px] h-[40px] rounded text-back bg-blue-700 font-semibold text-[18px]">Login</button></Link>
    </motion.div>
  )
}

export default Header