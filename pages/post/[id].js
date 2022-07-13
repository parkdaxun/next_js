import { useFouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
    const router = useFouter();
    const { id = 0 } = router.query;

    useEffect(() => {
        if(!/^[0-9]+$/test(id) || id === undefined) {
            router.replace("/");
        } else {
            console.info("post id" + id);
        }
    }, []);

    return <div>ID : {id}</div>;
}