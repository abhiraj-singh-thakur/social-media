export const success = (statusCode, message, data) => {
    return {
        status: 'ok',
        statusCode,
        message,
        data
    }
};

export const error = (statusCode, message) => {
    return {
        status: 'error',
        statusCode,
        message
    }
}

