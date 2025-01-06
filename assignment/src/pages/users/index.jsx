import Link from "next/link";
// import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const userPage = () => {
//     SWR, which stands for Stale-While-Revalidate, is a client data fetching hook and utility library for React applications that helps with data fetching, revalidating, and caching. It uses an HTTP cache invalidation strategy to improve user experience:
// If the requested data is in the cache and not stale: SWR returns the cached data.
// If the requested data is in the cache but stale: SWR makes an HTTP request to get the data, stores it in the cache, and returns the data.
// SWR can help you:
// Balance responsive UI performance with access to up-to-date data
// Create reusable data hooks
// Make code simpler and easier to maintain
// Show loading states for missing data
// Pre-render the page for SEO

const {data, error} = useSWR("https://dummyjson.com/users", fetcher)

if(error) {
    return <h1> Error Happend! </h1>
}

if (!data) return <h1>Loading...</h1>

    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     async function user(){
    //         const data = await fetch("https://dummyjson.com/users")
    //         setUsers(await data.json())
    //     }
    //     user()
    // },[])

    return (
        <div>
            <h1>User Page</h1>
            {/* {users && users.users && users.users.map((user) =>  <Link style={{textDecoration: 'none'}} href={`/users/${user.id}`} key={user.id}>
                <div> {user.firstName}</div>
                </Link> 
            )} */}

{data.users && data.users.map((user) =>  <Link style={{textDecoration: 'none'}} href={`/users/${user.id}`} key={user.id}>
                <div> {user.firstName}</div>
                </Link> 
            )}
        </div>
    );
}

export default userPage;