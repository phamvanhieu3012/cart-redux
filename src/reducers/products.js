//Chua cac san pham
var initialState = [
	{
		id: 1,
		name: 'Iphone 7 plus',
		image: '',
		description: 'Sản phẩm của Apple sản xuất',
		price: 500,
		inventory: 10,
		rating: 3
	},
	{
		id: 2,
		name: 'Iphone 8',
		image: '',
		description: 'Sản phẩm của Apple sản xuất',
		price: 600,
		inventory: 11,
		rating: 4
	},
	{
		id: 3,
		name: 'Iphone 8 plus',
		image: '',
		description: 'Sản phẩm của Apple sản xuất',
		price: 700,
		inventory: 12,
		rating: 5
	}
];

const product = (state=initialState, action) => {
	switch(action.type){
		default: return[...state];
	}
}

export default product;