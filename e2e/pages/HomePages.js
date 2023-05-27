describe('dog facts',() =>{
    it ('response code should be 200', ()=>{
        const request = {
            method: "GET",
            url: "https://dukengn.github.io/Dog-facts-API/headers",
            heders: {
                "user-agent": "My test user-agent"

            },
            failOnStatusCode: false
        };
        cy.request(request).then(response => {
        assert.equal(201,response.status); 
        assert.equal("My test user-agent", response.requestHeaders['user-agent']);
        })
    })
})





// const body = {
//     bodykey: "bodyValue"
// describe("httpbin tests", ()=>{
//     it('response code should be 200',()=>{
//        function getRandomInt(max) {
//         return Math.floor(Math.random() *max)
//        }
          
//        for (let index = 0; index < 10; index++) {
//         const randomId = getRandomInt(999);

//         const request = {
//             url: 'https://httpbin.org/headers',
//             id: randomId
//         };
//         cy.request(request).then(respons => {
//     assert.isTrue(respons.status ==200)

//        })
//     }
// })
// })
// //           cy.request(request).then(response => {
            
        
// //             assert.equal(201,respons.status);

// //             assert.equal("Mykola", respons.request.body.name);

// //             assert.isTrue(respons.duration <= 2000)
// //         })
// //     })
// // })
// // const request = {
// //       method: "POST",      
// //     url: 'https://httpbin.org/headers',
// //     headers: {
// //         "Cookie": "cookieName=cookieValue"
// //     },
// //     failOnStatusCode: false
// // };

// // describe("httpbin tests", ()=>{
// //     it('response code should be 200',()=>{
// //         cy.request(request).then(response => {
// //             assert.equal(200,respone.status);

// //             assert.equal("cookieName=cookieValue", response.requestHeaders['Cookie']);
// //         })
// //     })
// // })