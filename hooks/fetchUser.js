
import { useState, useEffect } from 'react'; // useState hooks import
import supabase from '../utils/supabase'; // supabase (sql cloud database)


export default function fetchUser(table) {  // our function

    const [loading, setLoading] = useState(false); // our use states hooks to be utilized
    const [data, setData] = useState(null);        
    const [error, setError] = useState(null);

    useEffect(() => { // useEffect so we can constantly monitor and update data
        const fetchData = async () => { // async for better handling of request
            setLoading(true);
            try {
                const { data, error } = await supabase // we query data ex(select * from 'user')
                    .from(table)
                    .select('*')

                if (!error) { 
                    setData(data);
                } else {
                    throw new Error('Failed to fetch data'); 
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [table]); // this is a depency array, we specify that watch that table if there is change in the data and rerun useEffect

    return { loading, data, error };  // we return our use state hooks

}