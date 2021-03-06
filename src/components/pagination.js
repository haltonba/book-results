import React from 'react'

const Pagination = ({totalBooks, paginate}) => {

    const pageNumbers = []

    for (let i = 1; i <= (10 > Math.ceil(totalBooks / 20) ? Math.ceil(totalBooks / 20) : 10); i++) {
        pageNumbers.push(i)
        
    }



    return (
        <nav>
            <ul className="pagination" style={{marginTop: "5px", justifyContent: "center"}}>
                {pageNumbers.map(number => (
                    <li key={number} className="page-itm">
                        <a href="!#" className="page-link" onClick={(event, num) => paginate(event, number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
