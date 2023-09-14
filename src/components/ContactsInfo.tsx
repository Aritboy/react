import {FC} from "react";
import Head from "next/head";

interface ContactInfo {
    contact: any;
}

const ContactsInfo: FC<ContactInfo> = ({contact}) => {
    const {name, email} = contact || {};

    if (!contact) {
        return <div>Нету такого контакта</div>
    }

    return <div>
        <Head>
            <title>{name}</title>
        </Head>
        {name}
        <br/>
        {email}
    </div>
}

export default ContactsInfo;