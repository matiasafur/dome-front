import * as yup from "yup";

export default signInSchema = yup.object().shape({
    username: yup
        .string()
        .min(5)
        .required(),
    password: yup
        .string()
        .min(7)
        .max(50)
        .required(),
});