import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvicer = ({ children }) => {
    const [results, SetResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Elon Musk');

    const getResults = async (type) => {
        setIsLoading(true);

        const resoponse = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': 'dcc480365fmsh298306d92fcc7d0p1feacbjsn02c5e17257b1'
            }
        });

        const data = await resoponse.json();

        console.log({ type, data })

        if (type.includes('/news')) {
            SetResults(data.entries)
        }
        else if (type.includes('/images')) {
            SetResults(data.image_results)
        }
        else {
            SetResults(data.results)
        }

        setIsLoading(false);

    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )

};

export const useResultContext = () => useContext(ResultContext);