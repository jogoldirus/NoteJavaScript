class noteView {
    constructor() {
        this.notes = [];
        this.noteCourante = 0;
    }
    add(note) {
        this.notes.push(note);
    }
    convertir() {

        let conv = new showdown.Converter();
        let htmlText = conv.makeHtml(this.notes[this.noteCourante].contenu);
        return htmlText;
    }
    insert() {
        let noteCouranteView = document.querySelector(".current_note");
        noteCouranteView.createTexteNode("Test");
    }
}