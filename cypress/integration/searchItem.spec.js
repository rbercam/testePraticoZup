/// <reference types="cypress" />
import { visit, searchItem } from '../actions/homeSearch.actions'
import { selectItem, addToCart } from '../actions/searchResult.actions'
import { viewCart } from '../actions/preCheckout.actions';
import { verifyTitle, verifyItemInCart } from '../actions/cart.actions';

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
        viewCart();
        verifyTitle('Carrinho de compras');
        verifyItemInCart('Iphone Xr');
    })
})
