import { ReactElement } from "react";
import { useNavigate } from 'react-router-dom';

import Sidebar from "./sidebar/Sidebar";

interface Props extends React.HTMLProps<HTMLElement> {
    children: ReactElement;
    title?: string;
    id?: string;
}

const Back = () => {
    const navigate = useNavigate();
    return (
        <button className="button" onClick={()=>navigate(-1)}>Back</button>
    );
};

const Next = () => {
    const navigate = useNavigate();
    return (
        <button className="button" onClick={()=>navigate(1)}>Next</button>
    );
};

export default function Layout({ children, title, id }: Props) {

    return (
        <div className="main-layout">
            <div className="w-10">
                <Sidebar />
            </div>
            <div className="w-80">
                <Back />
    
                {children}

                <Next />
                <span>{title}</span>
                <span>{id}</span>
            </div>
        </div>
    );
}

