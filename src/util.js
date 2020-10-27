import React, {useContext} from 'react';
// import {auth} from './firebase';
import {AppContext} from './contextAPI/context';
import {Route, Redirect} from 'react-router-dom';

export const generateTableHead = (table, data) => {
  const thead = table.createTHead();
  const row = thead.insertRow();
  console.log(data);

  for (let key in data) {
    const th = document.createElement('th');

    const text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
};

const ProtectedRoute = ({component: Component, ...rest}) => {
  const context = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={props => {
        return context.isAuthenticated()
          ? <Component {...props} />
          : <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;

export const generateTableBody = (table, data) => {
  const tbody = table.createTBody();

  for (let element of data) {
    let row = tbody.insertRow();
    for (let key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
};
