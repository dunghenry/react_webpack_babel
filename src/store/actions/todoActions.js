import axios from 'axios';
const getTodoByIdSuccess = (payload) => {
    return {
        type: 'GET_TODO',
        payload,
    };
};
export const getTodos = () => async (dispatch) => {
    try {
        const response = await axios.get(
            'https://express-mongodb-todos.herokuapp.com/api/v1/todos',
        );
        dispatch({
            type: 'GET_TODOS',
            payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getTodoById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
        );
        dispatch(getTodoByIdSuccess(response.data));
    } catch (error) {
        console.log(error);
    }
};
