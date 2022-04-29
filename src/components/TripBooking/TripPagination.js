import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import loaddash from "lodash";

const pagesize = 10;

const Pagination = () => {

  const allTripsListStore = useSelector((state) => state.Trip.AllTripsList);
  // const [allTripsListStore, setAllTripsListStore] = useSelector((state) => state.Trip.AllTripsList)
  const [paginatedPosts, setpaginatedPosts] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);

  useEffect(() => {
    // console.log(AllTripsListStore)
    setpaginatedPosts(
      loaddash(allTripsListStore).slice(0).take(pagesize).value()
    );
  }, [allTripsListStore]);

  const pageCount = allTripsListStore
    ? Math.ceil(allTripsListStore.length / pagesize)
    : 0;

  // if (pageCount === 1) {
  //   return null;
  // }
  const pages = loaddash.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setcurrentpage(pageNo);
    const startIndex = (pageNo - 1) * pagesize;
    const paginatedPost = loaddash(allTripsListStore)
      .slice(startIndex)
      .take(pagesize)
      .value();
    setpaginatedPosts(paginatedPost);
  };

  return (
    <div>
      {allTripsListStore.length>1  ?
      <div>
        <table className="table table-bordered table-warning table-striped ">
          <thead className="thead-dark">
            <tr>
              <th>tripBooking Id</th>
              <th>From Location</th>
              <th>To Location</th>
              <th>Bill</th>
              <th>driver Name</th>
              <th>driver rating</th>
              <th>Cab Type</th>
            </tr>
          </thead>
        
          <tbody>
            {paginatedPosts.map((e, index) => (
              <tr key={index}>
                <td>{e.tripBookingId}</td>
                <td>{e.fromLocation}</td>
                <td>{e.toLocation}</td>
                <td>{e.fromDateTime}</td>
                <td>{e.driver.driverName}</td>
                <td>{e.driver.rating}</td>
                <td>{e.driver.cab.carType}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="d-flex justify-content-center mt-3">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                className={
                  page === currentpage ? "page-item active" : "page-item"
                }
              >
                <p className="page-link" onClick={() => pagination(page)}>
                  {page}
                </p>
              </li>
            ))}
          </ul>
        </nav>

      </div>
      :<div class="alert alert-success alert-dismissible">
      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
      <strong>Info!</strong> No Trips To Show.
    </div>}
    </div>
  );
};
export default Pagination;
