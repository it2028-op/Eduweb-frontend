import React from "react";
import { HEADER } from '../utils/queries';
import { useQuery } from "@apollo/client/react";
import { Image } from "react-bootstrap";

export const Header = (props) => {
    const { loading, error, data } = useQuery(HEADER);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(error)}</p>;
    const header = data.header.data.attributes;   
        
    return (
        <header className='bg-warning p-3 text-center'>
            <Image src={ `http://localhost:1337${header.logo.data.attributes.url }` } style={{ height: '80px' }} />
            <h1 className='display-1 text-white text-uppercase'><strong>{ header.name }</strong></h1>
            <small style={{fontSize:'30px', color: '#aaa', borderTop: '1px solid #aaa', textTransform: 'uppercase'}}>{ header.motto }</small>
        </header>
    );
}