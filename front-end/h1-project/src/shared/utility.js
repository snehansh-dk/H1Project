export const updateObject = (oldState, updatedFields) => {
    return {...oldState, ...updatedFields}
};