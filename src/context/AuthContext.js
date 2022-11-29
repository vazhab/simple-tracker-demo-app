import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };  
        default: state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
        }
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // make api request to sign in with email and password

        // if we sign in, modify our state and set to authenticated

        // if signing in fails show error message
    };
};

const signout = (dispatch) => {
    return ({ email, password }) => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false, errorMessage: '' }
);