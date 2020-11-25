export default class questionTwoController {
  static removeItem(request, response) {
    const { data, item } = request.body;
    const dataObjectProvided = Object.keys(data).length;
    delete data[item];
    return Object.keys(data).length === dataObjectProvided
      ? response
          .status(404)
          .json({ status: 404, message: "attribute not found" })
      : response.status(200).json({ status: 200, output: data });
  }
}
