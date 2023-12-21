import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

describe('API Test -1  RentalAmountAnnuity With Product Type None (Smoke)',{ tags: '@SmokeTag' }, () => {
  

  it("should make a POST request and assert on the response", () => {
    cy.fixture('backend-data-files/payLoads/1-RequestData-RentalAmountAnnuityV2/RentalAmountAnnuityV2.json').then((requestParamAnnuity)=>{
      cy.log(requestParamAnnuity.payloadrentalamountannuityV2[0])
     cy.fixture('backend-data-files/endPoints/api-endpoints.json').then((endpoint)=>{   
    cy.request({

        method: "POST",
        url: Cypress.env('apiBaseUrl') + endpoint.rentalAmountAnnuityV2,
        body: requestParamAnnuity.payloadrentalamountannuityV2[0],

        headers: {
            'x-api-key': Cypress.env("apiKey")
             // Authorization: `Bearer ${Cypress.env("Access_token")}`
        }


    }).then((response)=>{
      cy.log(response)
    

    })
  });
})
})
});
