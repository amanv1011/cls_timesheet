import Store from "../redux/store";
import * as syncActions from "./syncActions";
import http from "../hoc/axiosClient";
import axios from "axios";
export const Authenticate = (req) => {
  //   console.log("in authenicate", req);
  //   const data = {
  //     email: req.profileObj.email,
  //   };
  //   axios
  //     .post(`http://localhost:3500/api/auth/checkUser`, data)
  //     .then((response) => {
  //       console.log(response);
  //       //   Store.dispatch(syncActions.logout(response.data));
  //     })
  //     .catch((err) => {});
};
export const getTools = (req, res) => {
  const data = {
    id: req,
  };
  http
    .post(`/api/auth/getusertools`, data)
    .then((response) => {
      // console.log(response);
      Store.dispatch(syncActions.getUserTools(response.data));
    })
    .catch((err) => {});
};

// export const getTrips = (req, res) => {
//   let params = {
//     adults: 1,
//     children: 0,
//     departDate: "2022-02-12",
//     destination: "MEL",
//     destinationCity: "Melbourne",
//     infants: 0,
//     origin: "NYC",
//     originCity: "New York",
//     returnDate: "2022-02-15",
//     trip_class: "Y",
//   };
//   axios
//     .post("http://localhost:3003/api/travelpayoutsApi", params)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {});
// };
