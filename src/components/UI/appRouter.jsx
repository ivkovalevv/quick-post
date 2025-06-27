import React from "react";
import About from "../../pages/About";
import Posts from "../../pages/Posts"
import PostsIdPage from "../../pages/PostIdPage"
import { Route, Routes} from "react-router-dom";

const AppRouter = () =>{
    return(
        <Routes>
          <Route path="/quick-post/about" element={<About></About>}></Route>
          <Route path="/quick-post/posts" element={<Posts></Posts>}></Route>
          <Route exact path="/quick-post/posts/:id" element={<PostsIdPage></PostsIdPage>}></Route>
        </Routes>
    )
}

export default AppRouter