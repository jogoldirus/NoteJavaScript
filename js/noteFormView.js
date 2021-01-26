class noteFormView {
    constructor() {

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

    }
}