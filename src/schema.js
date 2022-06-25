const { gql } = require('apollo-server-cloudflare');

const typeDefs = gql`
type Query {
  contract(searchFieldName: String!, searchFieldValue: String!, searchOperation: filterOperationType, MaxRecords: Int): ContractResponse 
  apiVersionInformation: versionInformation
}

type PageDetails { count: Int
  requestCount: Int
  prevPageUrl: String
  nextPageUrl: String }

type UserDefinedFields { name: String value: String }

type Items { id: Int
  billingPreference: Int
  billToCompanyContactID: Int
  billToCompanyID: Int
  companyID: Int
  contactID: Int
  contactName: String
  contractCategory: Int
  contractExclusionSetID: Int
  contractName: String
  contractNumber: String
  contractPeriodType: Int
  contractType: Int
  description: String
  endDate: String
  estimatedCost: Int
  estimatedHours: Int
  estimatedRevenue: Int
  exclusionContractID: Int
  internalCurrencyOverageBillingRate: Int
  internalCurrencySetupFee: Int
  isCompliant: Boolean
  isDefaultContract: Boolean
  opportunityID: Int
  organizationalLevelAssociationID: Int
  overageBillingRate: Int
  purchaseOrderNumber: String
  renewedContractID: Int
  serviceLevelAgreementID: Int
  setupFee: Int
  setupFeeBillingCodeID: Int
  startDate: String
  status: Int
  timeReportingRequiresStartAndStopTimes: Int
  userDefinedFields: [UserDefinedFields ] }

type ContractResponse { pageDetails: PageDetails items: [Items ] }

type versionInformation { apiVersions: [String ] }

enum filterOperationType {
  eq
  noteq
  gt
  gte
  lt
  lte
  beginsWith
  endsWith
  contains
  exist
  notExist
  in
  notIn
}

`;

module.exports = typeDefs;