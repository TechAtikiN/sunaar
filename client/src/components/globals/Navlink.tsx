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
      className={`
      flex group hover:cursor-pointer text-xs items-center space-x-2 p-1 rounded-full 
            `}
    >
      <span className={`${pathname.includes(link.path) ? 'bg-amber-600 text-gray-100' : 'bg-gray-100 text-gray-500'} group-hover:text-white p-1 h-7 w-7 group-hover:bg-amber-600 rounded-full `}
      >
        {link?.icon}
      </span>
      <Link
        href={link.path}
        className={`${collapsed ? 'hidden' : 'block'} text-gray-300 text-sm group-hover:scale-105 hover:text-amber-600
          ${pathname.includes(link.path) ? 'text-amber-600' : ''}
        `}>{link.name}
      </Link>
    </li>
  )
}

export default Navlink
