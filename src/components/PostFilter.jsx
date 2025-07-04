import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) =>{
    return (
        <form className="post-filter-wrapper">
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value.toLowerCase()})}
          placeholder="Search..."
        ></MyInput>
        <MySelect 
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sort" 
          options={[
            {value: 'title', name: 'by title'},
            {value: 'body', name: 'by description'}
          ]}>
        </MySelect>
      </form>
    )
}

export default PostFilter