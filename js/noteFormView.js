
class noteFormView {
    constructor(v) {
        this.noteViewer = v;

    }
    display() {
        let form = document.querySelector(".create_edit_note");
        form.classList.remove("create_edit_note-hidden");
    }
    hide() {
        let form = document.querySelector(".create_edit_note");
        form.classList.add("create_edit_note-hidden");
    }
    validate() {
        let form = document.querySelector(".create_edit_note");
        let titre = form.children.item(0).value;
        let content = form.children.item(1).value;
        let note = new Notes(titre, content);
        this.v.add(note);
        this.v.insert();
        alert(Ajouté);

    }
}