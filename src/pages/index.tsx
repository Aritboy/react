import HomePage from "@/components/screens/home/Home";

export default function Home() {
  return <HomePage />
}

// import {FunctionComponent, MouseEventHandler, useState} from 'react';
//
// type HeaderProps = {
//     title: string,
// }
// const Header: FunctionComponent<HeaderProps> = ({title}) => {
//     return <h1>{title ? title : 'Default title'}</h1>;
// }
//
// export default function HomePage() {
//     const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
//
//     const [likes, setLikes] = useState(0);
//
//     const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
//         setLikes(likes + 1);
//     }
//
//     return (
//         <div>
//             <Header title="Develop. Preview. Ship. 🚀"/>
//             <ul>
//                 {names.map((name) => (
//                     <li key={name}>{name}</li>
//                 ))}
//             </ul>
//
//             <button onClick={handleClick}>Like ({likes})</button>
//         </div>
//     );
// }