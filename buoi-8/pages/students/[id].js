import {useRouter} from "next/router";

function StudentUpdate() {
    const router = useRouter();
    return(
        <>
        <h1>Cập nhật {router.query.id}</h1>
        </>
    )
}

export default StudentUpdate;