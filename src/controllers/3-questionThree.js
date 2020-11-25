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
    // if (!magic.some(isNaN) || !distance.some(isNaN)) {
    //   response.send("Correct! All Numbers");
    // } else {
    //   response.send("Only numbers are allowed in the array");
    // }
    let lowestIndex = magic[0];
    const both = magic.reduce((acc, elem, i) => {
      const figure = acc + elem - distance[i];
      if (figure < lowestIndex) lowestIndex = i;
      return figure;
    }, 0);
    return both < 0
      ? response.status(400).json({ status: 400, message: -1 })
      : response.status(200).json({ status: 200, message: lowestIndex });
  }
}
