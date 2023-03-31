import React, {useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { appTheme, toggleMain } from '../features/appSlice';
import { addOneAsync } from '../features/studentSlice';

export default function StudentForm() {
    const theme = useSelector(appTheme);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');

    const payload = {
        firstName,
        lastName,
        email,
        age,
        grade
    };

    async function handdleSubmit(event) {
        if (firstName==='' || lastName==='' || email==='' || age==='' || grade==='') {
            alert('Debe Rellenar Todos los Campos');
        } else {
            addOneAsync(payload);
            dispatch(toggleMain());
        }
        event.preventDefault();
    }

    return (
        <div className={`student-info ${ theme }` }>
            <form className={'form'} action="">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={age} onChange={(event) => setAge(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="grade">Grade</label>
                    <select id="grade" value={grade} onChange={(event) => setGrade(event.target.value)}>
                        <option value=""></option>
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3th">3th</option>
                        <option value="4th">4th</option>
                    </select>
                </div>
                <div>
                    <button className={'btn success'} type='submit' value='Submit' onClick={ handdleSubmit }>Save</button>
                    <button className={'btn danger'} onClick={ () => dispatch(toggleMain()) }>Cancel</button>
                </div>
            </form>
        </div>
    );
}