const { gql } = require("apollo-server-cloudflare");

const typeDefs = gql`
  type Query {
    contract(
      searchFieldName: String!
      searchFieldValue: String!
      searchOperation: filterOperationType
      MaxRecords: Int
    ): ContractResponse
    contactByID(id: String): ContactByIDResponse
    apiVersionInformation: versionInformation
  }

  type PageDetails {
    count: Int
    requestCount: Int
    prevPageUrl: String
    nextPageUrl: String
  }

  type UserDefinedFields {
    name: String
    value: String
  }

  type ContractItem {
    id: Int
    billingPreference: Int
    billToCompanyContactID: Int
    billToCompanyID: Int
    companyID: Int
    contactID: Int
    contactName: String
    contractCategory: Int
    contractExclusionSetID: Int
    contractName: String
    contractInt: String
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
    purchaseOrderInt: String
    renewedContractID: Int
    serviceLevelAgreementID: Int
    setupFee: Int
    setupFeeBillingCodeID: Int
    startDate: String
    status: Int
    timeReportingRequiresStartAndStopTimes: Int
    userDefinedFields: [UserDefinedFields]
  }

  type ContractResponse {
    pageDetails: PageDetails
    items: [ContractItem]
  }

  type ContactByIDResponse {
    item: ContactItem
  }

  type ContactItem {
    id: Int
    additionalAddressInformation: String
    addressLine: String
    addressLine1: String
    alternatePhone: String
    apiVendorID: String
    bulkEmailOptOutTime: String
    city: String
    companyID: Int
    companyLocationID: String
    countryID: Int
    createDate: String
    emailAddress: String
    emailAddress2: String
    emailAddress3: String
    extension: String
    externalID: String
    facebookUrl: String
    faxInt: String
    firstName: String
    impersonatorCreatorResourceID: String
    isActive: Int
    isOptedOutFromBulkEmail: Boolean
    lastActivityDate: String
    lastModifiedDate: String
    lastName: String
    linkedInUrl: String
    middleInitial: String
    mobilePhone: String
    namePrefix: String
    nameSuffix: String
    note: String
    receivesEmailNotifications: Boolean
    phone: String
    primaryContact: Boolean
    roomInt: String
    solicitationOptOut: Boolean
    solicitationOptOutTime: String
    state: String
    surveyOptOut: Boolean
    title: String
    twitterUrl: String
    zipCode: String
  }


  type versionInformation {
    apiVersions: [String]
  }

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
