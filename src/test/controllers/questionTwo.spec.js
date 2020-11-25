/* eslint-disable no-undef */
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../index";
import { data } from "./question-data";

chai.should();

chai.use(chaiHttp);
const url = "/api/v1";

describe("Testing Question Two Endpoint", () => {
  describe("Remove item type property from object ", () => {
    it("should return data object", (done) => {
      chai
        .request(app)
        .patch(`${url}/remove-item`)
        .send({
          data,
          item: "type",
        })
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body.status).to.equal(200);
          expect(response.body).to.have.property("output");
          done();
        });
    });

    it("should return attribute not found", (done) => {
      chai
        .request(app)
        .patch(`${url}/remove-item`)
        .send({
          data,
          item: "noItemFromObject",
        })
        .end((error, response) => {
          expect(response).to.have.status(404);
          expect(response.body.status).to.equal(404);
          expect(response.body.message).to.equal("attribute not found");
          done();
        });
    });
  });
});
