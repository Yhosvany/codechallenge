import { useSelector, useDispatch } from "react-redux";
import { students, deleteOneAsync } from "../features/studentSlice";

import Student from './Student';

export const TableBody = () => {
    const items = useSelector(students);
    const dispatch = useDispatch();
    return (
        <tbody>
            {items.map((item, index) => {
                return(
                    <Student key={index} 
                        firstName={item.firstName} 
                        lastName={item.lastName}
                        email={item.email}
                        age={item.age}
                        grade={item.grade}
                        deleteOne={() => dispatch(deleteOneAsync(item._id, index))}
                    />
                ); 
            })}
        </tbody>
    )
}