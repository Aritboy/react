import {FC, PropsWithChildren} from "react"

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return <div className={`bg-amber-100`}>
        {children}
    </div>
}

export default Layout