import React from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function Paginate(props){

    return (
        <Pagination aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink onClick={() => props.click(1)} />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink onClick={() => props.click(props.current - 1)} />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink onClick={() => props.click(1)}>
              1
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink onClick={() => props.click(2)}>
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink onClick={() => props.click(3)}>
              3
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink onClick={() => props.click(4)}>
              4
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink onClick={() => props.click(5)}>
              5
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink next onClick={props.click(props.current + 1)} />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink last onClick={() => props.click(87)} />
          </PaginationItem>

        </Pagination>
    );
};

export default Paginate