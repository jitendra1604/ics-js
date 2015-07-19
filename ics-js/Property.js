export default class Property {
  static keyRegex = /^[A-Z]([A-Z]|-)*[A-Z]$/;
  static propName = "Property";

  constructor(value, skipTransformer = false) {
    this.value = value;
    this.skipTransformer = skipTransformer;
  }

  shortTransformer() {
    return true;
  }

  transformer() {
    return this.value;
  }

  transformedValue() {
    if (this.skipTransformer || this.shortTransformer()) return this.value;
    return this.transformer();
  }

  toString() {
    return `${this.constructor.propName}:${this.transformedValue()}`;
  }
}
