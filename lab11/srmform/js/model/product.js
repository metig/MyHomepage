
"use strict";

export class Product {
    #productId = 0;
    #productNumber = null;
    #productName = null;
    #unitPrice = 0.00;
    #quantityInStock = 0;
    #supplier = null;
    #dateSupplied = null;
    
    constructor(productId, productNumber, productName, unitPrice, quantityInStock, supplier, dateSupplied) {
        this.#productId = productId;
        this.#productNumber = productNumber;
        this.#productName = productName;
        this.#unitPrice = unitPrice;
        this.#quantityInStock = quantityInStock;
        this.#supplier = supplier;
        this.#dateSupplied = dateSupplied;
    }

    getProductId() { return this.#productId; }
    getProductNumber() { return this.#productNumber; }
    getProductName() { return this.#productName; }
    getUnitPrice() { return this.#unitPrice; }
    getQuantityInStock() { return this.#quantityInStock; }
    getSupplier() { return this.#supplier; }
    getDateSupplied() { return this.#dateSupplied; }

    setProductId(productId) { this.#productId = productId; }
    setProductNumber(productNumber) { this.#productNumber = productNumber; }
    setProductName(productName) { this.#productName = productName; }
    setUnitPrice(unitPrice) { this.#unitPrice = unitPrice; }
    setQuantityInStock(quantityInStock) { this.#quantityInStock = quantityInStock; }
    setSupplier(supplier) { this.#supplier = supplier; }
    setDateSupplied(dateSupplied) { this.#dateSupplied = dateSupplied; }

    toString() {
        return `{productId: ${this.#productId}, productNumber: ${this.#productNumber}, productName: ${this.#productName}, unitPrice: ${this.#unitPrice}, quantityInStock: ${this.#quantityInStock}, supplier: ${this.#supplier.getSupplierName()}, dateSupplied: ${this.#dateSupplied}}`;
    }
}