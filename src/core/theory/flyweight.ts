

const product = {
    "id":1,
    "description":"super produit",
    get details(){
        const data = fetch('https://dummyjson.com/products/' + this.id).then( res => res.json())
        this.details = data;
        return data;
    }
}
