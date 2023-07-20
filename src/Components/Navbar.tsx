import { useEffect, useState } from "react";
import './Navbar.scss'

interface NavbarProps  {
  name: string;
  name2: string;
  name3?: string;
}

 export function  Navbar (props: NavbarProps): JSX.Element{
    const [name, setName] = useState<string>('');
    const [name2, setName2] = useState<string>('');

    useEffect (() =>{
      setName(props.name);
    }, [props.name])

    useEffect (() =>{
      setName2(props.name2);
    }, [props.name2])

  return (
    <>
    <nav id='nav-bar'>
      <ul className="nav-link">
        <li>
        {name}
        </li>
        <li>
         {name2}
        </li>
        <li> 
         {props.name3}
        </li>
      </ul>
    <button
    onClick={() =>{
      setName('NEW NAME')
      setName2('NEW NAME 2')
    }}
    >
      Change Name
    </button>
    </nav>
    </>

  )

  
 }