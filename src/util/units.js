var conversions = {
  units: {
    area: {
      meter: "1",
      decimeter: "100"
    },
    mass: {
      kilogramm: "0.001",
      hectogram: "0.01"
    }
  },
  functions: {
    /**
     * Units conveter.
     *
     * @param {String} context The measurement units
     * @param {String} from The unit of measurement of the value to be converted
     * @param {String} to The unit of measure to which the value will be converted
     * @param {String} value The amount to be converted
     */
    converter: function(context, from, to, value) {
      context = context.toLowerCase();
      to = to.toLowerCase();
      from = from.toLowerCase();
      value = parseInt(value);

      return (
        (conversions.units[context][to] / conversions.units[context][from]) *
        value
      );
    }
  }
};

export default conversions;
