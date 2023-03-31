import { useSelector, useDispatch } from "react-redux";
import { appTheme, toggleTheme } from "../features/appSlice";

export default function Footer() {    
    const theme = useSelector(appTheme);
    const dispatch = useDispatch();
    
    return (
        <div className='footer'>
            <button className={`btn ${theme} hover-4`} onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
        </div>
    )
}