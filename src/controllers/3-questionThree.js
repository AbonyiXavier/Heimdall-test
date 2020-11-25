export default class questionThreeController {
  static lowestIndex(request, response) {
    const { magic, distance } = request.body;
    if (
      toString.call(magic) !== "[object Array]" ||
      toString.call(distance) !== "[object Array]"
    ) {
      response.send("This function takes in only arrays");
    }
    // eslint-disable-next-line no-restricted-globals
    if (!magic.some(isNaN) || !distance.some(isNaN)) {
      response.send("Correct! All Numbers");
    } else {
      response.send("Only numbers are allowed in the array");
    }
  }
}
