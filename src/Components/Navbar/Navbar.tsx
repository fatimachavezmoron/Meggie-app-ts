import { useEffect, useState } from "react";
import './Navbar.scss'
import { Link } from "react-router-dom";

interface NavbarProps  {
  name: string;
  name2: string;
  name3?: string;
  name4: string;
}

 export function  Navbar (props: NavbarProps): JSX.Element{
    const [name, setName] = useState<string>('');

    useEffect (() =>{
      setName(props.name);
    }, [props.name])

  return (
    <>
    <nav id='nav-bar'>
      <ul className="nav-link">
        <li>
          <Link to={`${process.env.PUBLIC_URL}/`} className='Link'>
          {name}
          </Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/about`} className='Link'>
          {props.name2}
          </Link>
        </li>
        <li> 
          <Link to={`${process.env.PUBLIC_URL}/contact`} className='Link'>
          {(props.name3!== undefined) ? props.name3 : null}
          </Link>
        </li>
        <li> 
        <Link to={`${process.env.PUBLIC_URL}/team`} className='Link'>
          {props.name4}
          </Link>
        </li>
      </ul>
    <button
    onClick={() =>{
      setName('NEW NAME')
    }}
    >
      Change Name
    </button>
    </nav>
    </>

  )

  
 }