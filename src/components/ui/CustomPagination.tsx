type TPaginationProps = {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const CustomPagination = ({ page, totalPages, setPage }: TPaginationProps) => {
  return (
    <div className="flex justify-end ">
      <nav className="bg-white rounded-lg border border-gray-300">
        <ul className="flex">
          {/* Previous Button */}
          <li>
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="block hover:bg-gray-200 disabled:bg-gray-200 text-center w-10 py-2 px-3 border-r border-gray-300 focus:outline-none"
            >
              «
            </button>
          </li>
          {/* Pagination Numbers */}

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (paginatedPage: number) => (
              <li key={paginatedPage}>
                <button
                  onClick={() => setPage(paginatedPage)}
                  className={`${
                    paginatedPage === page
                      ? "bg-primary hover:bg-primary text-white"
                      : "hover:bg-gray-200"
                  } block  text-center w-10 py-2 px-3 border-r border-gray-300 focus:outline-none`}
                >
                  {paginatedPage}
                </button>
              </li>
            )
          )}

          {/* Add more pagination numbers as needed */}
          {/* Next Button */}
          <li>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="block hover:bg-gray-200 disabled:bg-gray-200 text-center w-10 py-2 px-3 border-gray-300 focus:outline-none"
            >
              »
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CustomPagination;
