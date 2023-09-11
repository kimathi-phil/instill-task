import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="mt-4 flex justify-center">
      <button
        className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full mr-2"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* <span>{currentPage}</span> */}

      <button
        className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full mr-2"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
