import React, {useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getAllAsync } from '../features/studentSlice';
import { appTheme } from '../features/appSlice';

import { TableHead } from './TableHead';
import { TableBody } from './TableBody';

export default function Main () {
  const dispatch = useDispatch();
  const theme = useSelector(appTheme);

  useEffect(() => dispatch( getAllAsync ), [dispatch]);

  const errorMsg = {msg:'We can not Fetch Data from DataBase', colorClass: 'danger'};
  const loadingMsg = {msg:'... Loading from DataBase ...', colorClass: 'edit'};
  const Feedback = (status) => <div className={`footer ${status.colorClass}`}> <h2>{status.msg}</h2> </div>
  
  let error = undefined;
  let isLoaded = true;

  if(error) {
    return Feedback(errorMsg);
  } else if (!isLoaded) {
    return Feedback(loadingMsg);
  } else {
    return (
      <div className={`main ${ theme }` }>
        <table>
          <TableHead/>
          <TableBody/>
        </table>
      </div>
    );
  }
}