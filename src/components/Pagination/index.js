import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  totalPageCount,
  handlePageChange,
  PreviousLabel,
  NextLabel,
  isShowPageController = true,
  ...rest
}) => {
  const [currentPage, setCurrentPage] = React.useState(0);

  return (
    <ReactPaginate
      previousLabel={
        isShowPageController && (
          <PreviousLabel
            onFirstChange={() => setCurrentPage(0)}
            onPreviousChange={() =>
              currentPage > 0 && setCurrentPage(currentPage - 1)
            }
          />
        )
      }
      nextLabel={
        isShowPageController && (
          <NextLabel
            onLastChange={() => {
              setCurrentPage(totalPageCount - 1);
            }}
            onNextChange={() => {
              currentPage < totalPageCount - 1 &&
                setCurrentPage(currentPage + 1);
            }}
          />
        )
      }
      forcePage={currentPage}
      pageCount={totalPageCount}
      onPageChange={({ selected }) => {
        setCurrentPage(selected);
        handlePageChange(selected);
      }}
      marginPagesDisplayed={1}
      {...rest}
    />
  );
};
Pagination.defaultProps = {
  activeClassName: "!bg-deep_purple-50 !text-indigo-900 rounded-lg",
  pageClassName:
    "font-inter font-semibold gap-2.5 h-9 items-center leading-[normal] text-gray-900 text-left text-sm w-9",
  pageLinkClassName: "w-full h-full flex justify-center items-center",
  breakClassName: "gap-2.5 h-9 items-center justify-end ml-2.5 p-[9px] w-9",
  containerClassName: "flex flex-row gap-6 items-start justify-center w-full",
};

export { Pagination };
