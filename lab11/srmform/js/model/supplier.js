"use strict";

export class Supplier {
    #supplierId = 0;
    #supplierName = null;

    constructor(supplierId, supplierName) {
        this.#supplierId = supplierId;
        this.#supplierName = supplierName;
    }

    getSupplierId() { return this.#supplierId; }
    getSupplierName() { return this.#supplierName; }

    setSupplierId(newSupplierId) {
        this.#supplierId = newSupplierId;
    }
    setSupplierName(newSupplierName) {
        this.#supplierName = newSupplierName;
    }

    toString() {
        return `{SupplierId: ${this.#supplierId}, SupplierName: ${this.#supplierName}}`;
    }
}