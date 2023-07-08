const request = require("supertest");
const expect = require("chai").expect;
const should = require("chai").should();

//total issues found in restful booker (1)

describe("Restful Booker Testing",function () {
    let APIToken;

    it("Get Token", function (done) {
        request("https://restful-booker.herokuapp.com")
            .post("/auth")
            .send({"username":"admin","password":"password123"})
            .end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.have.property("token");
                APIToken = res.body["token"];
                expect(APIToken).to.be.an('string');
                done();
            })
    });

    //This is supposed to fail because of restful booker
    it('Invalid login info', function (done) {
        request("https://restful-booker.herokuapp.com")
            .post("/auth")
            .send({"username2":"Invalid","password":"Invalid2222"})
            .expect(401,done)
    });
});