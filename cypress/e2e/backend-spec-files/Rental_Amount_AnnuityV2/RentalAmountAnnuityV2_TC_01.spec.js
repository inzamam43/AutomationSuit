
describe('Monthly Cases  RentalAmountAnnuity With Product Type None (Smoke)',{ tags: '@SmokeTag' }, () => {
  

  it("should make a POST request and assert on the response", () => {
    
      
    const dataFiles = [
      'backend-data-files/payLoads/RentalAmountAnnuityV2_TestData/RentalAmountAnnuityV2Monthly_TD_01.json',
      'backend-data-files/endPoints/api-endpoints.json',
      // Add more file paths as needed
    ];

    cy.loadDataFromFiles(dataFiles).then((loadedData) => {
      const requestParamAnnuity = loadedData['RentalAmountAnnuityV2'];
      const apiEndpoints = loadedData['api-endpoints'];

      cy.log(requestParamAnnuity.payloadrentalamountannuityV2[0]);
    })
  })
})
    // cy.request({

    //     method: "POST",
    //     url: Cypress.env('apiBaseUrl') + endpoint.rentalAmountAnnuityV2,
    //     body: requestParamAnnuity.payloadrentalamountannuityV2[0],

    //     headers: {
    //         'x-api-key': Cypress.env("apiKey")
    //          // Authorization: `Bearer ${Cypress.env("Access_token")}`
    //     }


    // }).then((response)=>{
    //   cy.log(response)
    

    // })
  