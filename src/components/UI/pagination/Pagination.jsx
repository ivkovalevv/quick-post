import React from "react";
import {getPagesArray} from "../../../utils/pages"

const Pagination = ({totalPages, page, changePage}) =>{
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="page__wrapper">
          <div className="pages">
            {pagesArray.map(p =>
              <span 
              onClick={() => changePage(p)}
              key={p} 
              className={page === p? "page page__current" : "page"}>
                {p}
              </span>
            )}
          </div>
      </div>
    )
}

export default Pagination