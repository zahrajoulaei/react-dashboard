import { ReactChild, ReactElement, ReactFragment, ReactNode, ReactPortal } from "react";
import Sidebar from "./sidebar/Sidebar";

interface Props extends React.HTMLProps<HTMLElement> {
    children: ReactElement;
    title: string;
    id: string;
}


export default function Layout({ children, title, id }: Props) {
    return (
        <div className="main-layout">
            <div className="w-20">
            <Sidebar />
            </div>
            <div className="w-80">
            {children}
            <span>{title}</span>
            <span>{id}</span>
            </div>
        </div>
    );
}

