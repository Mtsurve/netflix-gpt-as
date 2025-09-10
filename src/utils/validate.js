export const checkValidData = (email, password, name) => {

    const isNameValid = name === null ? true : name.trim().length > 0;
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password);
   
    if (!isNameValid) return "Name cannot be empty.";
    if (!isEmailValid ) return "Email is not valid.";
    if (!isPasswordValid) return "Password is not valid.";

    return null;
}