export {};
// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import Spinner from "../View/Spinner";

// const PrivateRoute: React.FC = ({
//   component: Component,
//   auth: { isAuthenticated, loading },
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       loading ? (
//         <Spinner />
//       ) : isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/landing" />
//       )
//     }
//   />
// );

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps)(PrivateRoute);
