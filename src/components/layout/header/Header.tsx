import {FC} from "react";
import Link from "next/link";

const Header: FC = () => {

    return (
        <div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </div>
    );
};

export default Header