class Notes {
	constructor(t, c) {
		this.titre = t;
		this.contenu = c;
		this.date_creation = new Date();
	}
	setTitre(title) {
		this.title = title;
	}
	setContenu(contenu) {
		this.contenu = contenu;
	}

}