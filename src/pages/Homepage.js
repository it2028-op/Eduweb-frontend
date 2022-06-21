import React from "react";
import { useQuery } from "@apollo/client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { HOMEPAGE } from "./../utils/queries";

export default function Homepage() {
    const { loading, error, data } = useQuery(HOMEPAGE);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(error)}</p>;
    const homepage = data.homepage.data.attributes;

    return (
        <div className="border border-2 border-dark">
            <div className="container">
                <ReactMarkdown>{homepage.welcome}</ReactMarkdown>
            </div>
        </div>
    );
}
