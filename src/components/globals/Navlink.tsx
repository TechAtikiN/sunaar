import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  link: Navlink
  index: number
  collapsed: boolean
}
const Navlink = ({ link, index, collapsed }: Props) => {
  const pathname = usePathname()

  return (
    <li
      key={index}
      className={`flex group hover:cursor-pointer text-xs items-center space-x-2 p-1 rounded-full hover:bg-gray-200
            ${pathname.includes(link.path) ? 'bg-gray-200' : 'bg-white'}
            `}
    >
      <span className={`${pathname.includes(link.path) ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-500'} group-hover:text-white p-1 h-7 w-7 group-hover:bg-amber-600 rounded-full `}
      >
        {link?.icon}
      </span>
      <Link
        href={link.path}
        className={`${collapsed ? 'hidden' : 'block'} text-gray-600 font-semibold`}>{link.name}
      </Link>
    </li>
  )
}

export default Navlink