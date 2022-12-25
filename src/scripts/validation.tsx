// Contact form validation
export const validateText = (elementName: string, value: string, minLength: number = 2) => {
    if (value.length == 0)
        return `${elementName} is required`
    else if (value.length < minLength)
        return `${elementName} must contain at least ${minLength} characters`
    else 
        return ''
}

export const validateEmail = (elementName: string, value: string, regEx: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) => {
    if (value.length == 0)
        return `${elementName} is required`
    else if (!regEx.test(value))
        return `${elementName} must be an valid email address, eg. name@domain.com`
    else 
        return ''
}


// Sign up form/ login validation
export const validateFirstName = (value: string, minLength: number = 2) => {
    if (value.length == 0)
        return `First name is required`
    else if (value.length < minLength)
        return `First name must contain at least ${minLength} characters`
    else 
        return ''
}

export const validateLastName = (value: string, minLength: number = 2) => {
    if (value.length == 0)
        return `Last name is required`
    else if (value.length < minLength)
        return `Last name must contain at least ${minLength} characters`
    else 
        return ''
}

export const validateSignUpEmail = (value: string, emailRegEx: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) => {
    if (value.length == 0)
        return `E-mail address is required`
    else if (!emailRegEx.test(value))
        return `E-mail must be an valid e-mail address, eg. name@domain.com`
    else 
        return ''
}

export const validatePassword = (value: string, passwordRegEx: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) => {
    if (value.length == 0)
        return `Password is required`
    else if (!passwordRegEx.test(value))
        return `Password must be at least 8 characters, contain both upper och lowercase letters, and atleast one number and one special character`
    else 
        return ''
}

