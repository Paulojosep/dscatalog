import ReactPaginate from 'react-paginate';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
import './styles.css'

type Props = {
  pageCount: number;
  range: number;
  onChanges?: (pageNumber: number) => void;
}

const Pagination = ( {pageCount, range, onChanges} : Props) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeLinkClassName="pagination-item active"
      disabledClassName="arrow-inactive"

      onPageChange={(items) => (onChanges) ? onChanges(items.selected) : {}}

      previousLabel={<div className="pagination-arrow-container"><ArrowIcon /></div>}
      nextLabel={<div className="pagination-arrow-container"><ArrowIcon /></div>}
    />
  );
};

export default Pagination;
