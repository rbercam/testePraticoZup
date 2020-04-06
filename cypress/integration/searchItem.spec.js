/// <reference types="cypress" />
import { visit, searchItem } from '../actions/homeSearch.actions'
import { selectItem, addToCart } from '../actions/searchResult.actions'
import { verifyMessage } from '../actions/preCheckout.actions';

describe('Search Item', () => {

    it('accessing the amazon website', () => {
        visit();
    })
    it('search item in website', ()=>{
        searchItem('iphone xr');
    })

    it('select item in website', ()=>{
        selectItem('Iphone Xr');
    })

    it('add item in cart', ()=>{
        addToCart();
    })

    it('view item in cart', ()=>{
       verifyMessage('Adicionado ao carrinho')
    })
})
