import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { Button } from '@paljs/ui';
import React from 'react';

const Pagination = ({ pageCount, pageIndex, pageRows, onPageSelect, onPageRowsChanged }) => {
  const [index, setIndex] = React.useState(pageIndex);
  React.useEffect(() => {
    setIndex(pageIndex);
  }, [pageIndex]);
  return (
    <div className="ReactTable">
      <div className="-pagination">
        <div className="-previous">
          <Button
            type="button"
            disabled=""
            onClick={() => {
              onPageSelect(Math.max(1, index - 1));
            }}
          >
            Previous
          </Button>
        </div>
        <div className="-center">
          <span className="-pageInfo">
            Page
            <div className="-pageJump">
              <input
                aria-label="jump to page"
                type="number"
                id="page-index-area"
                value={index + ''}
                onChange={(e) => setIndex(Number(e.target.value) || 1)}
                onKeyUp={(e) => {
                  if (e.key == 'Enter') {
                    var text = document.getElementById('page-index-area').value;
                    if (Number.isNaN(Number(text))) return;
                    onPageSelect(Number(text));
                  }
                }}
              />
            </div>
            &nbsp; of &nbsp;
            <span className="-totalPages">{pageCount}</span>
          </span>
          <span className="select-wrap -pageSizeOptions">
            <select aria-label="rows per page" onChange={(e) => onPageRowsChanged(e.target.value)} value={pageRows}>
              {[5, 10, 20, 50, 100].map((s) => (
                <option key={'option' + s} value={s}>
                  {s} Rows
                </option>
              ))}
            </select>
          </span>
        </div>
        <div className="-next">
          <Button
            type="button"
            disabled=""
            onClick={() => {
              // alert(pageIndex);
              onPageSelect(Math.min(pageCount, pageIndex + 1));
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
