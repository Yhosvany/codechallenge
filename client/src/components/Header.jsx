import { useSelector, useDispatch } from "react-redux";

import {isMain, toggleMain} from '../features/appSlice';

export default function Header() {
    const isMainComponent = useSelector(isMain);
    const dispatch = useDispatch();

    return (
        <div className={`header`}>
            <div><h2>Manage Students</h2></div>
            <div>               
                <button 
                    className={`btn ${isMainComponent ? 'success' : 'dark'}`} 
                    disabled={isMainComponent ? false : true}
                    onClick={ () => dispatch(toggleMain()) }
                >Add New Student</button>
            </div>
        </div>
    );
}
