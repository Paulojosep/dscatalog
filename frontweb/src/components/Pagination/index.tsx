import ReactPaginate from 'react-paginate';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
import './styles.css'

type Props = {
  forcePage?: number;
  pageCount: number;
  range: number;
  onChanges?: (pageNumber: number) => void;
}

const Pagination = ( {forcePage, pageCount, range, onChanges} : Props) => {
  return (
    <ReactPaginate
      forcePage={forcePage}
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

      previousLabel={<div className="pagination-arrow-container" data-testid="arrow-previous"><ArrowIcon /></div>}
      nextLabel={<div className="pagination-arrow-container" data-testid="arrow-next"><ArrowIcon /></div>}
    />
  );
};

export default Pagination;
