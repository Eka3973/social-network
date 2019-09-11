import React from 'react';
import style from "./Pagination.module.scss";


interface IProps {
    usersCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPage: Function,
    getUsers: Function
}


const Pagination = ({pageSize, usersCount, currentPage, setCurrentPage, getUsers}: IProps) => {


    const onPageChanged = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        getUsers(pageNumber);
    };

    let pagesCount = Math.ceil(usersCount / pageSize);

    let startPage = 1;
    let endPage = 10;

    if (currentPage + 4 >= endPage) {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
    }
    if (currentPage === pagesCount) {
        startPage = pagesCount - 9;
        endPage = pagesCount;
    }


    // @ts-ignore
    let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);


    return (
        <ul className={style.pagination}>
            <li onClick={() => onPageChanged(1)}>
                First
            </li>
            <li className={currentPage === 1 ? style.disabled : ''} onClick={() => onPageChanged(currentPage - 1)}>
                Previous
            </li>
            {pages.map(p => {

                return <li key={p} className={currentPage === p ? style.active : ''}
                           onClick={() => onPageChanged(p)}>{p}
                </li>

            })}
            <li className={currentPage === pagesCount ? style.disabled : ''}
                onClick={() => onPageChanged(currentPage + 1)}>Next
            </li>
            <li onClick={() => onPageChanged(pagesCount)}>Last</li>
        </ul>
    )

};
export default Pagination;