function product(nom, description, prix) {
    this.name = nom;
    this.category = description;
    this.price = prix;
}
;

// Create :
product.addProduct = function () {
    console.log("Un nouveau produit a été ajouté");
};

// Read :
product.viewProduct = function () {
    console.log("Le produit a été consulté");
};

// Update :
product.updateProduct = function () {
    console.log("Le produit a été modifié");
};

// Delete :
product.deleteProduct = function () {
    console.log("Le produit a été supprimé");
};

