
class Account {
  #balance

  constructor(user) {
    this.owner = user
    this.#balance = 0
    this.deposits = []
    this.loans = []
    this.tranfers = []
  }

  get balance() {
    return this.#balance
  }

  addDeposit(desposit) {
    this.#balance += desposit.value
    this.deposits.push(desposit)
  }

  addLoan(loan) {
    this.#balance += loan.value
    this.loans.push(loan)
  }

  addTransfer(transfer) {
    if (transfer.toUser.email === this.owner.email) {
      this.#balance += transfer.value
      this.tranfers.push(transfer)

    } else if (transfer.fromUser.email === this.owner.email) {
      this.#balance -= transfer.value
      this.tranfers.push(transfer)
    }
  }

}

module.exports = Account