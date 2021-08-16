import React from 'react'
import {useRouter} from 'next/router'

const Admin = () => {
    const router = useRouter()

    React.useEffect(() => {
        router.push("/admin/dashboard")
    })

    return <div>We will redirect you to admin page</div>
}

export default Admin