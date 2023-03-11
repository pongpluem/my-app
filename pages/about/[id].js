import { useRouter } from "next/router"

export default function Id() {

    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)

    return (
     <div>
        <h3>This is Id Page</h3>
     </div>  
    )

  }