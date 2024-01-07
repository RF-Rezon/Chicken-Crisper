const card = document.querySelector('#card');
const openShopping = document.querySelector('#cart');
let body = document.querySelector('body');

openShopping.addEventListener('click', ()=>{
    body.classList.toggle('active');
})

let products = [
    {
        id: 1,
        name: 'Chicken',
        image: 'https://i.ibb.co/m5S5ZFx/chicken.jpg',
        description: 'Chicken fajitas served with rice and beans, tortials, guacamole, salsa and sour cream Chicken fajitas served with dolor sit amet consectetur adipisicing elit. Natus hic dolorum molestiae fuga neque. Obcaecati quos mollitia ullam rem molestias nesciunt excepturi iure, delectus corrupti accusantium totam corporis autem. Illo.',
        price: 69
    },
    {
        id: 2,
        name: 'Fajitas',
        image: 'https://i.ibb.co/QvdRmR9/fajitas.jpg',
        description: 'Chicken fajitas served with rice and beans, tortials, guacamole, salsa and sour cream Chicken fajitas served with dolor sit amet consectetur adipisicing elit. Natus hic dolorum molestiae fuga neque. Obcaecati quos mollitia ullam rem molestias nesciunt excepturi iure, delectus corrupti accusantium totam corporis autem. Illo.',
        price: 169
    },
    {
        id: 3,
        name: 'Chicken Masala',
        image: 'https://i.ibb.co/GsB6wJX/chicken-masala.jpg',
        description: 'Chicken fajitas served with rice and beans, tortials, guacamole, salsa and sour cream Chicken fajitas served with dolor sit amet consectetur adipisicing elit. Natus hic dolorum molestiae fuga neque. Obcaecati quos mollitia ullam rem molestias nesciunt excepturi iure, delectus corrupti accusantium totam corporis autem. Illo.',
        price: 269
    }
];

let sideCards  = [];

const addOrderHandler = (key) => {
    if(sideCards[key] == null){
        // copy product form list to list card
        sideCards[key] = (products[key]);
        sideCards[key].quantity = 1;
    }
    // reloadCard();
}


function initApp(){
    products.map((item, key) =>{
        let newDiv = document.createElement('div');
        // newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div
        class="bg-gray-200 h-[485px] w-full rounded-md flex flex-col p-[14px]"
        >
        <div class="basis-[50%] w-full h-full rounded-sm">
          <img
            class="w-full h-full object-cover"
            src=${item.image}
            alt="food item image"
          />
        </div>
        <div
          class="basis-[50%] pt-3 flex flex-col items-center justify-between"
        >
          <div class="w-full h-full">
            <p class="text-xl font-semibold">${item.name}</p>
            <p class="text-sm font-medium text-gray-600">${item.price}$/each</p>
            <p class="line-clamp-3 text-sm text-gray-500 my-4">
              ${item.description}
            </p>
          </div>
          <div class="w-full h-full">
            <button onclick="addOrderHandler(${key + 1})"
              class="py-1 w-full cursor-pointer rounded-md bg-orange-500 font-medium text-white mb-2"
            >
              <p class="text-base">Add To Order</p>
            </button>
            <button 
              class="py-1 w-full cursor-pointer rounded-md bg-inherit border-[3px] border-orange-500 font-medium text-white"
            >
              <p class="text-base text-orange-500">Customize</p>
            </button>
          </div>
        </div>
        </div> `;
        card.appendChild(newDiv);
    })
}

initApp();






