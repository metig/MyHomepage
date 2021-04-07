
document.getElementById("aProduct").addEventListener("click", popEvents)

function popEvents(){
    var name = document.getElementById('name').value;
    var prodNum = document.getElementById('proName').value;
    var qunStock = document.getElementById("quaStock").value;
    var supplier = document.getElementById("sup").value;
    var unitPrice = document.getElementById('uPrice').value;
    var dSupplier = document.getElementById("dSupplied").value;

    alert("product name: " + name + "\n" + "product number: " + prodNum + "\n" + "quantity in stock: "  + qunStock + "\n" + "supplier: " + supplier + "\n" + "unit price: "  + unitPrice + "\n" + "date supplied: " + dSupplier)
}


