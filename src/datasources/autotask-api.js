const { RESTDataSource } = require('apollo-datasource-rest');

class AutotaskAPI extends RESTDataSource {
    constructor() {
        super();
    }

    setBaseURL() {
        const apiZone = this.context.headers.get('X-Autotask-Zone');
        this.baseURL = 'https://webservices' + apiZone + '.autotask.net/ATServicesRest/';
    }

    willSendRequest(request) {
        // API_INTEGRATION_CODE
        request.headers.set('ApiIntegrationCode', this.context.headers.get('X-Autotask-Integration-Code'));
        // API_SECRET
        request.headers.set('Secret', this.context.headers.get('X-Autotask-Secret'));
        // API_USER
        request.headers.set('UserName', this.context.headers.get('X-Autotask-User'));
    }

    async getContract(searchFieldName, searchFieldValue, searchOperation, MaxRecords) {
        this.setBaseURL();
        var op = searchOperation || 'eq';
        var body = {
            "MaxRecords": MaxRecords | 100,
            "IncludeFields": [],
            "Filter": [
                {
                    "op": String(op),
                    "field": String(searchFieldName),
                    "value": String(searchFieldValue),
                    "udf": false,
                    "items": []
                }
            ]
        }
        return await this.post('V1.0/Contracts/query', body, {});
    }

    async apiVersionInformation() {
        this.setBaseURL();
        return await this.get('VersionInformation', {}, {});
    }
}

module.exports = AutotaskAPI;


