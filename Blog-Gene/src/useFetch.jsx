import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [ispending, setIspending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIspending(false);
                setError(null);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setIspending(false);
            });
        }, 750);
    }, [url]);

    return {data, ispending, error}
}

export default useFetch;