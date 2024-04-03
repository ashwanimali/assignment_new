
class EchoService {
    constructor() {
        this.data = {}
    }

    async create(reqData) {
        this.data = reqData
        return reqData;
    }

    async find() {
        return this.data
    }
}

module.exports = EchoService;
