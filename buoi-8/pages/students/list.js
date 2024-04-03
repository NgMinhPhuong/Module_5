function StudentList({data}) {
    return (
        <>
        <h1>Danh sách</h1>
        </>
    )
}

export default StudentList;

export async function getServerSideProps() {
    return {
        props: {
            data: []
        }
    }
}