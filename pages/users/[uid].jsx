import { useRouter } from 'next/router'

export default function User(){
    const router = useRouter()

    const { uid } = router.query

    return(
        <div>
            <h1>hello user {uid}</h1>
        </div>
    )
}