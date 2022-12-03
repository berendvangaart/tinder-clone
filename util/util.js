
export const onboardingValidation = (firstName, lastName) => {
    let invalidFields = []
    if (firstName.length < 1) invalidFields.push('firstName')
    if (lastName.length < 1) invalidFields.push('lastName')
    return invalidFields
}

export const profileDetailValidation = (password, email, linkedIn, JobTitle) => {
    let invalidFields = []
    if (password.length < 1) invalidFields.push('password')
    if (email.length < 1) invalidFields.push('email')
    if (linkedIn.length < 1) invalidFields.push('linkedin')
    if (JobTitle.length < 1) invalidFields.push('jobTitle')
    return invalidFields
}

export const loginValidation = (email, password) => {
    let invalidFields = []
    if (password.length < 1) invalidFields.push('password')
    if (email.length < 1) invalidFields.push('email')
    return invalidFields

}

