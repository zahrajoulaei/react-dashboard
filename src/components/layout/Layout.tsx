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
            <div className="w-10">
            <Sidebar />
            </div>
            <div className="w-80">
            <button className="button">Back</button>
            {children}
            <span>{title}</span>
            <span>{id}</span>
            </div>
        </div>
    );
}

