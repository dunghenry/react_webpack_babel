import React from 'react';
import img from './assets/images/img.jpg';
import './assets/styles/main.scss';
import { connect } from 'react-redux';
import { getTodos, getTodoById } from './store/actions/todoActions';
import { setUser } from './store/actions/authActions';
const App = ({ getTodos, getTodoById, setUser }) => {
    React.useEffect(() => {
        getTodos();
        getTodoById(1);
        setUser({
            id: 1,
            name: 'Joe',
        });
    }, []);
    const handleGetData = () => {
        getTodoById(1);
    };
    return (
        <div>
            <h1>React + Babel</h1>
            <button onClick={handleGetData}>Get Data</button>
            <img src={img} />
        </div>
    );
};
const mapStateToProp = (state) => ({});
export default connect(mapStateToProp, { getTodoById, getTodos, setUser })(App);
