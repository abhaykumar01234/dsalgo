class QTree {
  constructor(question, recommendation = null) {
    this.question = question;
    this.yes = null;
    this.no = null;
    this.recommendation = recommendation;
  }

  insertChild(question, side) {
    const newQuestion = new QTree(question);
    this[side] = newQuestion;
    return newQuestion;
  }
}
