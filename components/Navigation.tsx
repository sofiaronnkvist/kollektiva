import Link from 'next/link'

function Navigation() {
  return (
    <ul className="flex">
      <li className="mr-6">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-800">Sök bostad</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-800">Lägg ut bostad</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-800">Så funkar det</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-800">Home</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/loggain">
          <a className="text-blue-500 hover:text-blue-800">Logga in</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/blimedlem">
          <a className="text-blue-500 hover:text-blue-800">Bli medlem</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/blimedlem">
          <a className="text-blue-500 hover:text-blue-800">Min profil</a>
        </Link>
      </li>
    </ul>
  )
}

export default Navigation