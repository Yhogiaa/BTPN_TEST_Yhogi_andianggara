var response = () => { }

response.messege = (code, messege, data) => {
    return {
        code: code,
        messege: messege,
        data: data
    }
}

response.success = (data) => {
    return response.messege("00", "Success", data);
}

response.error = (code, status) => {
    return response.messege(code, status, null);

}

module.exports = response