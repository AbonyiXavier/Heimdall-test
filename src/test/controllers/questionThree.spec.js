import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../index";
import { data2, data3 } from "./question-data";

chai.should();

chai.use(chaiHttp);
const url = "/api/v1";

describe("Testing Question Three Endpoint", () => {
  describe("Lowest Index for Aladdin's to return 0", () => {
    it("should return lowest 0", (done) => {
      chai
        .request(app)
        .post(`${url}/lowest-index`)
        .send(data2)
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body.status).to.equal(200);
          expect(response.body).to.have.property("message");
          expect(response.body.message).to.equal(0);
          done();
        });
    });

    it("should return -1", (done) => {
      chai
        .request(app)
        .post(`${url}/lowest-index`)
        .send(data3)
        .end((error, response) => {
          expect(response.body).to.be.an("object");
          done();
        });
    });
  });
});
