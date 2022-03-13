import { rejects } from "assert";
import { resolve } from "node:path/win32";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
// const axios = require('axios').default;
import axios, { AxiosResponse } from 'axios';

export default function Home() {
    const [userlist, setUserlist] = useState<any[]>([]);

    const URL = 'https://jsonplaceholder.typicode.com/users';
    // const getAllUsers = ()=> {
    //     axios.get(URL)
    //     .then((result) => {
    //         setUserlist(result.data)
    //         console.log(result)
    //     })
    //     .catch(error=>console.log(error));
    // }

    React.useEffect(() => {
        // getAllUsers().then(result => setUserlist(result));
        axios.get(URL).then((result => setUserlist(result.data)));
    }, []);


    return (
        <div>
            <Layout children={
                <>
                    <h2 className="home-title">
                        Home
                    </h2>
                    <p>Here is the list of users and their emails:</p>
                    <div className="users-list">
                        <ul>
                            {userlist.map(user =>
                                <li>
                                    <span>Name: {user.name}</span>
                                    <span>
                                        Email: _ {user.email}
                                    </span>
                                </li>)}
                        </ul>

                    </div>
                </>


            } />
        </div>
    );
}

