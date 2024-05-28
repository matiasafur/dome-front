import * as yup from "yup";

export default registerSchema = yup.object().shape({
    username: yup
        .string()
        .min(5)
        .required(),
    email: yup
        .string()
        .email('Insert a valid E-mail')
        .required(),
    password: yup
        .string()
        .min(7)
        .max(50)
        .required(),
});