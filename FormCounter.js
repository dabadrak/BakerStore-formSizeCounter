class FormCounter {
  constructor (haveElemId, haveHeightElemId, needElemId, needHeightElemId,  resultElemId, submitClass) {
    this.haveElemId = haveElemId;
    this.haveHeightElemId = haveHeightElemId;
    this.needElemId = needElemId;
    this.needHeightElemId = needHeightElemId;
    this.resultElemId = resultElemId;
    this.submitClass = submitClass;
    this._init();
  }
  _init() {
    $(this.submitClass).click(() => {
      event.preventDefault();
      this._render();
    })
  }
  _count() {
    const have = +$(this.haveElemId).val();
    const need = +$(this.needElemId).val();
    let haveHeight = +$(this.haveHeightElemId).val();
    let needHeight = +$(this.needHeightElemId).val();
    if (!haveHeight || !needHeight) {
      haveHeight = 1;
      needHeight = 1;
    }
    if (typeof have !== 'number' &&
        typeof need !== "number" &&
        typeof haveHeight !== "number" &&
        typeof needHeight !== "number") {
      return 'Вводите числа'
    } else if (have === 0 || need === 0){
      return 'Заполните поля'
    } else {
      return ((need ** 2 * needHeight) / (have ** 2 * haveHeight)).toFixed(3);
    }
  }
  _render() {
    $(this.resultElemId).val(this._count())
  }
}