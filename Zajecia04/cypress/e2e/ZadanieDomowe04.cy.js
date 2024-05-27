describe('httpbin test 01', () => {

    const request = {
      method: 'GET',
      url: 'https://httpbin.org/post',
      failOnStatusCode: false
    };
      it('resonse code should be 405', () => {
        cy.request(request).then(response => {
  
        assert.equal(405, response.status);
        })
    })
  })
 
describe('httpbin test 02', () => {
   const request = {
     method: 'GET',
     url: 'https://httpbin.org/headers',
     headers: {
        "customHeader": "358"
     },
     failOnStatusCode: false
    };
      it('test that header set correctly', () => {
        cy.request(request).then(response => {
  
        assert.equal(200, response.status);
        assert.equal("358", response.requestHeaders.customHeader);
        })
    })
  })
  

  describe('httpbin tests 03', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/user-agent',
      headers: {
        'user-agent': 'My test user-agent'
      },
      failOnStatusCode: false
    };
  
    it('test that user-agent ser correctly and log it', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
        assert.equal("My test user-agent", response.requestHeaders['user-agent']);
        cy.log(response.body);
      })
    })
  })

  describe('httpbin tests 04 i 05', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/base64/SFRUUEJJTiBpcyBhd2Vzb21l',
      failOnStatusCode: false
    };
  
    it('test that image is sent as response', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
        cy.log(response.body);
      })
    })
    it('test duration < 400', () =>{
      cy.request(request).then(response => { 
        assert.isTrue(response.duration <= 400)
    });
    });
  })

describe('httpbin test 06', () => {
  const request = {
    method: 'PATCH',
    url: 'https://httpbin.org/patch',
    failOnStatusCode: false
    };
    it('PATCH method test & test duration < 300', () => {
      cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.isTrue(response.duration <= 300)
      })
  })
})

describe('httpbin test 07', () => {
  const request = {
    method: 'POST',
    url: 'https://httpbin.org/post',
    failOnStatusCode: false
    };
    it('POST method test & test duration < 200', () => {
      cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.isTrue(response.duration <= 200)
      })
   })
}) 


describe('httpbin test 08', () => {
  const request = {
    method: 'PUT',
    url: 'https://httpbin.org/put',
    failOnStatusCode: false
    };
    it('PUT method test & test duration < 150', () => {
      cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.isTrue(response.duration <= 150)
      })
   })
})

describe('httpbin test 09', () => {
  const request = {
    method: 'GET',
    url: 'https://httpbin.org/headers',
    headers: {
      'Cookie': 'cookieName=cookie01'
    },
    failOnStatusCode: false
    };
    it('testing sending a cookie', () => {
      cy.request(request).then(response => {
       assert.equal(200, response.status);
      assert.equal("cookieName=cookie01", response.requestHeaders['Cookie'])
      })
   })
})

describe('httpbin test 10', () => {
     it('testing random ids', () => {
      for(let i = 0; i < 20; i++) {
        const randomId = getRandomInt(1000000);

        const request = {
          url: 'https://httpbin.org/headers',
          id: randomId 
        }
      
      cy.request(request).then(response => {
      assert.isTrue(response.status == 200)
      })
    }  
  })
})

function getRandomInt(value) {
  return Math.floor(Math.random() * value)
}