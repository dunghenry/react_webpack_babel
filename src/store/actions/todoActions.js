import axios from 'axios';
export const getTodos = async (dispatch) => {
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
