import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default: state;
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {},
    { isSignedIn: false }
);