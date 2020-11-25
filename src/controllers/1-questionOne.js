export default class questionOneController {
  static inputValidation(request, response) {
    const { data, rules } = request.body;
    const dataObjectProvided = Object.keys(data);
    const DataMissing = rules.filter((rule) =>
      dataObjectProvided.every((elem) => elem !== rule)
    );
    if (DataMissing.length === 0) {
      return response.status(200).json({ status: 200, message: "Valid" });
    }
    return response
      .status(400)
      .json({ status: 400, missingInputItems: DataMissing });
  }
}
