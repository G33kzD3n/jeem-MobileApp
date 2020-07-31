import * as Yup from 'yup';

const validationLogin =Yup.object().shape({
    email:Yup.string().required().email().label('Email'),
    password:Yup.string().required().min(4).label('Password')
})

const validationRegister =Yup.object().shape({
    name:Yup.string().required().min(3).label('Name'),
    email:Yup.string().required().email().label('Email'),
    password:Yup.string().required().min(4).label('Password')
})


export default{
    validationLogin,
    validationRegister

}