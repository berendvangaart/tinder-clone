
export const onboardingValidation = (firstName, lastName) => {
    let invalidFields = []
    if (firstName.length < 1) invalidFields.push('firstName')
    if (lastName.length < 1) invalidFields.push('lastName')
    return invalidFields
}


