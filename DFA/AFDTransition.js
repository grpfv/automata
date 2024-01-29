class AFDTransition {
  constructor(
    fromNode,
    toNode,
    values,
  ) {
    this._fromNode = fromNode;
    this._toNode = toNode;
    this._values = values;
  }

  get toNode() {
    return this._toNode;
  }

  hasValue(char) {
    for (let i = 0; i < this._values.length; i++) {
      if (char === this._values[i]) {
        return true;
      }
    }
    return false;
  }

}
