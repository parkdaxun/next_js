import {useRouter} from "next/router";
import {useEffect} from "react";

export default function PostDetail() {
    const router = useRouter();
    const { id = 0 } = router.query;

    useEffect(() => {
        if (!/^[0-9]+$/.test(id) || id === undefined) {
            router.replace("/");
        }
    }, [id]);

    return (
        <div>ID: {id}</div>
    )
}
