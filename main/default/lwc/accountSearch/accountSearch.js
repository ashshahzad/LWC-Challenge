// import { LightningElement, wire, track } from 'lwc';
// import getAccounts from '@salesforce/apex/accountController.getAccounts';

// export default class AccountSearch extends LightningElement {
//     @track accounts;
//     @track searchKey = '';
//     @track selectedAccount;

//     @wire(getAccounts, { searchKey: '$searchKey' })

//     wiredAccounts({ error, data }) {
//         if (data) {
//             this.accounts = data;
//         } else if (error) {
//             console.error(error);
//             this.accounts = null;
//         }
//     }

//     handleSearchChange(event) {
//         this.searchKey = event.target.value;
//     }

//     handleAccountSelect(event) {
//         const accountId = event.target.dataset.name;
//         this.selectedAccount = this.accounts.find(acc => acc.Name === accountName);
//     }
// }

// import { LightningElement, wire, track } from 'lwc';
// import getAccounts from '@salesforce/apex/AccountController.getAccounts';

// export default class AccountSearch extends LightningElement {
//     @track accounts;
//     @track searchKey = '';
//     @track selectedAccount;

//     @wire(getAccounts, { searchKey: '$searchKey' })
//     wiredAccounts({ error, data }) {
//         if (data) {
//             this.accounts = data;
//         } else if (error) {
//             console.error(error);
//             this.accounts = null;
//         }
//     }

//     handleSearchChange(event) {
//         this.searchKey = event.target.value;
//     }

//     handleAccountSelect(event) {
//         const accountId = event.target.dataset.id;
//         this.selectedAccount = this.accounts.find(acc => acc.Id === accountId);
//     }
// }

import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountSearch extends LightningElement {
    @track accounts;
    @track searchKey = '';
    @track selectedAccount;

    handleInputChange(event) {
        // Capture the search key but do not initiate search yet
        this.searchKey = event.target.value;
    }

    async handleSearch() {
        try {
            // Call Apex method imperatively when search is initiated
            const result = await getAccounts({ searchKey: this.searchKey });
            this.accounts = result;
        } catch (error) {
            console.error('Error fetching accounts:', error);
            this.accounts = null;
        }
    }

    handleAccountSelect(event) {
        const accountId = event.target.dataset.id;
        this.selectedAccount = this.accounts.find(acc => acc.Id === accountId);
    }
}


