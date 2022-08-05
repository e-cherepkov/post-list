import React, { useRef, useState } from "react";
import MyInput from "./UI/input/myInput";
import MySelect from "./UI/select/mySelect";


const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput 
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder="search"
            />
            <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Sort by"
            options={[
                {value: 'title', name: 'title'},
                {value: 'body', name: 'body'}
            ]}
            />
        </div>
    );
};

export default PostFilter;