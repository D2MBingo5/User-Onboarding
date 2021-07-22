import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    pw: yup
        .string()
        .trim()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must agree to the Terms of Service')
})

export default formSchema