import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../server";
import { data, rules } from "./question-data";

chai.should();

chai.use(chaiHttp);
const url = "/api/v1";

describe("Testing Question One Endpoint", () => {
  describe("All Input Validation passes", () => {
    it("should return valid if all input items are present in the request body'", (done) => {
      chai
        .request(app)
        .post(`${url}/input-validate`)
        .send({
          data,
          rules,
        })
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body.message).to.equal("Valid");
          done();
        });
    });
  });
});
