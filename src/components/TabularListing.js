//List of references

//Creating a sortable table:
//https://www.smashingmagazine.com/2020/03/sortable-tables-react/

//Unicode symbols for styling
//https://unicode-table.com/en/25BC/

//Locale date string 
//https://medium.com/swlh/use-tolocaledatestring-to-format-javascript-dates-2959108ea020

import React from 'react';
import '../styles/tabularlisting.css';
import AlertDialog from "./Dialog";
import Button from "@material-ui/core/Button";

const { DateTime } = require("luxon");
const options = {year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const TabularListing = ({ posts }) => {
  const { items, requestSort, sortConfig } = useSortableData(posts);
  const getClassNamesFor = (title) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === title ? sortConfig.direction : undefined;
  };
  return (
    <>
    <h4>Post Listing</h4>
    <table>
      
      <thead>

        <tr>

          <th>
            <button
              type="button"
              onClick={() => requestSort('title')}
              className={getClassNamesFor('title')}
            >
              Title
            </button>
          </th>

          <th>
            <button
              type="button"
              onClick={() => requestSort('author_name')}
              className={getClassNamesFor('author_name')}
            >
              Author
            </button>
          </th>

          <th>
            <button
              type="button"
              onClick={() => requestSort('date_created')}
              className={getClassNamesFor('date_created')}
            >
              Date Created
            </button>
          </th>

          <th>
            <button
              type="button"
              onClick={() => requestSort('date_modified')}
              className={getClassNamesFor('date_modified')}
            >
              Date Modified
            </button>
          </th>

          <th>
            <button
              type="button"
              onClick={() => requestSort('published')}
              className={getClassNamesFor('published') + " reversed"}
            >
              Draft
            </button>
          </th>

          <th>

          </th>
          <th>

          </th>
          <th>

          </th>

        </tr>
      </thead>


      <tbody>
        {items.map((item) => (
          <tr className={item.published ? "notDraft" : "isDraft"} key={item._id}>
            <td>{item.title}{item.published ? "" : " (Draft)"}</td>
            <td>{item.author_name}</td>
            <td>{DateTime.fromISO(item.date_created).toLocaleString(options)}</td>
            <td>{DateTime.fromISO(item.date_modified).toLocaleString(options)}</td>
            <td>{item.published ? "No" : "Yes"}</td>
            <td>{item.published ? <Button><a target="_blank" href={`${process.env.REACT_APP_PUBLIC_URL}posts/${item._id}`}>View Live</a></Button> : ""}</td>
            <td><Button><a href={process.env.REACT_APP_MY_URL+`#/posts/${item._id}`}>Edit</a></Button></td>
            <td><AlertDialog deleteid={item._id}></AlertDialog></td>
          </tr>
        ))}
      </tbody>

    </table>
    </>
  );
};

export default TabularListing;