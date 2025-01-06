import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const userInfo = () => {
    const router = useRouter()
    const [userInfo, setUserInfo] = useState()
    console.log(userInfo)
    useEffect(()=> {
        const Id = router.query.id
        async function getUser(id) {
            const data = await fetch(`https://dummyjson.com/users/${id}`)
            const user = await data.json()
            setUserInfo(user)
        }
        getUser(Id)
    },[router.query.id])

    return (
        <div>
            <h1>{userInfo?.firstName}</h1>
        </div>
    );
}

export default userInfo;