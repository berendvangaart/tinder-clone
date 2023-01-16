import Toast from "react-native-toast-message";

const linkedInRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/[a-zA-Z0-9-./]+$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const onboardingValidation = (firstName, lastName) => {
    let invalidFields = []
    if (firstName.length < 1) invalidFields.push('firstName')
    if (lastName.length < 1) invalidFields.push('lastName')
    return invalidFields
}

export const profileDetailValidation = (password, email, linkedIn, JobTitle) => {

    let invalidFields = []
    if (password.length < 1) invalidFields.push('password')
    if (!emailRegex.test(email)) invalidFields.push('email')
    if (!linkedInRegex.test(linkedIn)) invalidFields.push('linkedin')
    if (JobTitle.length < 1) invalidFields.push('jobTitle')
    return invalidFields
}

export const loginValidation = (email, password) => {
    let invalidFields = []
    if (password.length < 1) invalidFields.push('password')
//    if (!emailRegex.test(email)) invalidFields.push('email')
    return invalidFields
}


export const showToast = (text, type = 'success') => {
    Toast.show({
        type: type,
        text1: text,
    }); }

