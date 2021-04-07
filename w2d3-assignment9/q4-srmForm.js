

$(document).ready(function(){
    "use strict"
    
    function Product(productNumber, quantity, name, supplier, unitPrice, date){
        this.productNumber = productNumber;
        this.quantity = quantity;
        this.name = name;
        this.supplier = supplier;
        this.unitPrice = unitPrice;
        this.date = date;
    }

    Product.prototype.toString = function(){
        return `{productNumber: ${this.productNumber}, quantity: ${this.quantity}, name: ${this.name},
        supplier: ${this.supplier}, unitPrice: ${this.unitPrice},date: ${this.date} }`;
    }
    $("#productForm").aProduct(
        event =>{
            event.preventDefault();

            
            const prodNum = $("#proName").val;
            const qunStock = $("#quaStock").val;
            const name = $("#name").val;
            const supplier = $("#sup").val;
            const unitPrice = $("#uPrice").val;
            const dSupplier = $("#dSupplied").val;


            const newProduct = new Product(prodNum, qunStock, name,supplier,unitPrice, dSupplier);
            console.log(newProduct.toString());
        }
    )

})