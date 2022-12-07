module.exports = {
  Query: {
    contract: async(_, {searchFieldName, searchFieldValue, searchOperation, MaxRecords}, { dataSources }) => dataSources.autotaskAPI.getContract(searchFieldName, searchFieldValue, searchOperation, MaxRecords),
    contactByID: async(_, {id}, { dataSources }) => dataSources.autotaskAPI.getContactByID(id),
    apiVersionInformation: async(_, {}, { dataSources }) => dataSources.autotaskAPI.apiVersionInformation()
  },
}
