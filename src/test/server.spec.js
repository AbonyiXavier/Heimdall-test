import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../server";
// import app from "../index";

chai.should();

chai.use(chaiHttp);

describe("/ should display Welcome to Heimdall Technologies APIs Test questions....", () => {
  it("it should get the home page", (done) => {
    chai
      .request(app)
      .get("/")
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body.message).to.equal(
          "Welcome to Heimdall Technologies APIs Test questions...."
        );
        done();
      });
  });
});

export default describe;
