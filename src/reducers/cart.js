//Chua cac san pham duoc mua
import * as types from '../constants/ActionType';

var initialState = [
	{
		product:{
			id: 1,
			name: 'Iphone 7 plus',
			image: '',
			description: 'Sản phẩm của Apple sản xuất',
			price: 500,
			inventory: 10,
			rating: 3
		},
		quantity: 5
	}
];

const cart = (state=initialState, action) => {
	switch(action.type){
		case types.ADD_TO_CART:
			return [...state];
		default: return[...state];
	}
}

export default cart;