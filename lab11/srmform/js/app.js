"use strict";

import { Supplier } from "./model/supplier.js";
import { Product } from "./model/product.js";

$(document).ready(function() {

    $("#productForm").on("submit", function(event) {
        event.preventDefault();

        const strProductNo = $("#productNumber").val();
        const strProductName = $("#name").val();
        const unitPrice = $("#unitPrice").val();
        const quantityInStock = $("#quantityInStock").val();
        const supplierName = $("#supplier").val();
        const dateSupplied = $("#dateSupplied").val();
        const newProduct = new Product(
            0, strProductNo, strProductName, unitPrice, quantityInStock, 
            new Supplier(0, supplierName), new Date(dateSupplied)
        );
        console.log(newProduct.toString());

        const $aNewProduct = $("<a>", {href: "#", class: "list-group-item list-group-item-action", text: `${newProduct.toString()}` });
        const isProductsListEmpty = $("#divProductsList").attr("data-isempty");
        if(isProductsListEmpty == "true") {
            // Remove the last child node
            $("#divProductsList").children("a#hyplnkEmptyMsg").remove();
            $("#divProductsList").append($aNewProduct);
            $("#divProductsList").attr("data-isempty", "false");
        } else {
            $("#divProductsList").append($aNewProduct);
        }

        // Clear the form-fields
        $("#productNumber").val("");
        $("#name").val("");
        $("#unitPrice").val("");
        $("#quantityInStock").val("");
        $("#supplier").val("");
        $("#dateSupplied").val("");
        $("#productNumber").focus();
    });

});