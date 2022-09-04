import React from 'react';
import img from './assets/images/img.jpg';
import axios from 'axios';
import './assets/styles/main.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from './store/actions/todoActions';
const App = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        // dispatch({
        //   type: 'SET_USER',
        //   payload: {
        //     id: 1,
        //     name: 'John',
        //   }
        // })
        getTodos(dispatch);
    }, []);
    return (
        <div>
            <h1>React + Babel</h1>
            <img src={img} />
        </div>
    );
};

export default App;
