import { Outlet } from "react-router-dom";


const ArticlePage = () => {

    return (
        <>
            <h1>Articles</h1>
            <Outlet />
        </>
    )
}

export default ArticlePage;