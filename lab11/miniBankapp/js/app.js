"use strict";

import { Account } from "./model/account.js";

$(document).ready( function() {
        const accountsData = [];

        $("#formNewAccount").on("submit", 
            event => {
                event.preventDefault();
                const txtAccountNo = document.querySelector("#txtAccountNo");
                const txtCustomerName = document.querySelector("#txtCustomerName");
                const ddlAccountType = document.querySelector("#ddlAccountType");
                const strAccountNo = txtAccountNo.value;
                const strCustomerName = txtCustomerName.value;
                const strAccountType = ddlAccountType.value;

                addNewAccountData(new Account(strAccountNo, strCustomerName, strAccountType));

                addNewAccountDataRow(strAccountNo, strCustomerName,strAccountType);

                txtAccountNo.value = "";
                txtCustomerName.value = "";
                ddlAccountType["selectedIndex"] = 0;
                txtAccountNo.focus();
        });

        const addNewAccountDataRow = function(accountNo, customerName, accountType) {
            const tblAccounts = document.querySelector("#tblAccounts");
            if(accountsData.length == 1) {
                $("#tblAccounts tbody tr").remove();
            }
            const newRow = tblAccounts.insertRow(-1);
            const newCellRowId = newRow.insertCell(0);
            const nextRowId = accountsData.length;
            const strNewRowId = document.createTextNode(`${nextRowId}.`);
            newCellRowId.appendChild(strNewRowId);
            const newCellAccountNo = newRow.insertCell(1);
            const strNewRowAccountNo = document.createTextNode(`${accountNo}`);
            newCellAccountNo.appendChild(strNewRowAccountNo);
            const newCellCustomerName = newRow.insertCell(2);
            const strNewRowCustomerName = document.createTextNode(`${customerName}`);
            newCellCustomerName.appendChild(strNewRowCustomerName);
            const newCellAccountType = newRow.insertCell(3);
            const strNewRowAccountType = document.createTextNode(`${accountType}`);
            newCellAccountType.appendChild(strNewRowAccountType);
        };

        const addNewAccountData = function(newAccount) {
            accountsData.push(newAccount);
        };

        const displaySavingsAccountsOnly = function(_accountsData) {
            const savingsAccounts = _accountsData.filter(acc => acc.accountType == "Savings");
            $("#tbodyAccounts").children().remove();
            if(savingsAccounts.length > 0) {
                let rowId = 0;
                for(const account of savingsAccounts) {
                    loadSavingsAccountDataRow(account, ++rowId);
                }
            } else {
                const emptyRow = `<tr><td colspan="4">No Savings account</td></tr>`;
                $("#tbodyAccounts").append(newRow);
            }
        };

        const loadSavingsAccountDataRow = function(account, rowId) {
            const newRow = `<tr><td>${rowId}</td><td>${account.getAccountNo()}</td>`;
            newRow += `<td>${account.getCustomerName()}</td><td>${account.getAccountType()}</td></tr>`;
            $("#tbodyAccounts").append(newRow);
        };

        document.querySelector("#chkSavingsOnly").addEventListener("click",
            (event) => {
                if ($(this).is(":checked")) {
                    displaySavingsAccountsOnly(accountsData);
                } else {
                    // reloadAll
                }
            }
        );
    }
);