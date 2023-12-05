const Installments = require("./Installments")

class Loan {
  static #fee = 1.05

  constructor(value, installments) {
    this.value = value
    this.installments = []
    for (let i = 1; i <= installments; i++) {
      this.installments.push(new Installments(((value * Loan.#fee) / installments), i))
    }
    
    this.createdAt = new Date()
  }

  static get getfee() {
    return Loan.#fee
  }

  static set setFee(newfeePercentage) {
    Loan.#fee = 1 + (newfeePercentage / 100)
  }
}

module.exports = Loan