module.exports = {
  Query: {
    contract: async(_, {searchFieldName, searchFieldValue, searchOperation, MaxRecords}, { dataSources }) => dataSources.autotaskAPI.getContract(searchFieldName, searchFieldValue, searchOperation, MaxRecords),
    apiVersionInformation: async(_, {}, { dataSources }) => dataSources.autotaskAPI.apiVersionInformation()
  },
}
