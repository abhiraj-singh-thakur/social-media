const success = (statusCode, message, data) => {
    return {
        status: 'ok',
        statusCode,
        message,
        data
    }
};

const error = (statusCode, message) => {
    return {
        status: 'error',
        statusCode,
        message
    }
}

module.exports = {
    success,
    error
}