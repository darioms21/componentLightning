import { LightningElement, wire } from 'lwc';
import getAccountData from '@salesforce/apex/AccountController.getAccountData';

const accountEj = [
    {Id:'0031700000pJRRSAA1',
    Name: 'Nombre1',
    BillingAddress: 'Address1',
    Phone: '+34 666666666',
    Type: 'Customer - Direct',
    OwnerId: '00509000004qNbdAAE'},
    {Id:'0031700000pJRRSAA2',
    Name: 'Nombre2',
    BillingAddress: 'Address2',
    Phone: '+34 666666666',
    Type: 'Customer - Direct',
    OwnerId: '00509000004qNbdAAE'},
    {Id:'0031700000pJRRSAA3',
    Name: 'Nombre3',
    BillingAddress: 'Address3',
    Phone: '+34 666666666',
    Type: 'Customer - Direct',
    OwnerId: '00509000004qNbdAAE'}
];

const columns=[
    { label: 'Account Name', fieldName: 'Name', type: 'Name'},
    { label: 'Billing State', fieldName: 'BillingAddress', type: 'Address'},
    { label: 'Phone', fieldName: 'Phone', type: 'Phone'},
    { label: 'Type', fieldName: 'Type', type: 'Picklist'},
]




export default class ComponentePrueba extends LightningElement {

    columns = columns;

    accountsEj = accountEj;

    @wire(getAccountData) accounts;

/*
    handleSelect(event){
        const accountId = event.detail;
        this.selectedAccount = this.accounts.data.find(
            (account) => account.Id === accountId
        );
    }
  */  
}