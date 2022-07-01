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
    <div class="ReactTable">
      <div class="-pagination">
        <div class="-previous">
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
        <div class="-center">
          <span class="-pageInfo">
            Page
            <div class="-pageJump">
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
            <span class="-totalPages">{pageCount}</span>
          </span>
          <span class="select-wrap -pageSizeOptions">
            <select aria-label="rows per page" onChange={(e) => onPageRowsChanged(e.target.value)}>
              {[5, 10, 20, 50, 100].map((s) => (
                <option key={'option' + s} value={s} selected={pageRows == s}>
                  {s} Rows
                </option>
              ))}
            </select>
          </span>
        </div>
        <div class="-next">
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
