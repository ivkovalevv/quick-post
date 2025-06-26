import React from "react";
import About from "../../pages/About";
import Posts from "../../pages/Posts"
import PostsIdPage from "../../pages/PostIdPage"
import { Route, Routes} from "react-router-dom";

const AppRouter = () =>{
    return(
        <Routes>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/posts" element={<Posts></Posts>}></Route>
          <Route exact path="/posts/:id" element={<PostsIdPage></PostsIdPage>}></Route>
        </Routes>
    )
}

export default AppRouter