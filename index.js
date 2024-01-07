const card = document.querySelector('#card');
const openShopping = document.querySelector('#cart');
const closeSideCart = document.querySelector('#close');
const sideCart = document.querySelector('#sideCart');
const total = document.querySelector('#total');
const quantity1 = document.querySelector('#quantity1');
const quantity2 = document.querySelector('#quantity2');


let body = document.querySelector('body');


openShopping.addEventListener('click', () => {
    body.classList.toggle('active');
})

closeSideCart.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Chicken',
        image: 'https://i.ibb.co/m5S5ZFx/chicken.jpg',
        description: 'Chicken fajitas served with rice and beans, tortials, guacamole, salsa and sour cream Chicken fajitas served with dolor sit amet consectetur adipisicing elit. Natus hic dolorum molestiae fuga neque. Obcaecati quos mollitia ullam rem molestias nesciunt excepturi iure, delectus corrupti accusantium totam corporis autem. Illo.',
        price: 69,
        new: true
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
        price: 269,
        new: true
    }
];

let sideCards = [];

const addOrderHandler = (key) => {
    if (sideCards[key] == null) {
        // copy product form list to list card
        body.classList.add('active');
        sideCards[key] = JSON.parse(JSON.stringify(products[key]));
        sideCards[key].quantity = 1;

        // Disable the button
        const addButton = document.querySelector(`#addButton${key}`);
        if (addButton) {
            addButton.disabled = true;
            let selectParagaraph = addButton.querySelector(`#buttonText${key}`);
            if (selectParagaraph) {
                selectParagaraph.innerText = 'Added To Cart';
            }
            addButton.classList.add('disabled-button');
        }
    }
    reloadCard();
}


(function() {
    products.map((item, key) => {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div
        class="relative bg-zinc-100 h-[485px] w-full rounded-md flex flex-col py-[14px] px-4"
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
            <button id="addButton${key}" onclick="addOrderHandler(${key})"
              class="py-1 w-full cursor-pointer rounded-md bg-customRed font-medium text-white mb-2"
            >
              <p id="buttonText${key}" class="text-base">Add To Order</p>
            </button>
            <button 
              class="py-1 w-full cursor-pointer rounded-md bg-inherit border-[3px] border-orange-500 font-medium text-white"
            >
              <p class="text-base text-customRed">Customize</p>
            </button>
          </div>
        </div>
       ${item.new ? `<div class="absolute -top-2 -left-5 -rotate-45 px-3 py-1 bg-customRed rounded-2xl"><p class="uppercase text-xs text-white font-medium">New</p></div>` : ""}
        </div>`;
        card.appendChild(newDiv);
    })
}) ();

function reloadCard() {
    sideCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    // let OneTotal;
    sideCards.forEach((item, key) => {
        totalPrice = totalPrice + item.price * item.quantity;
        count = count + item.quantity;
        if (item != null) {
            let newDiv = document.createElement('div');
            newDiv.innerHTML = `
            <div
            class="p-3 flex w-full border-2 border-white rounded-md h-[150px] gap-x-3"
          >
            <div class="basis-[30%]">
              <div class="w-full h-full rounded-md">
                <img
                  class="w-[90%] h-full object-cover rounded-md"
                  src=${item.image}
                  alt="food item image"
                />
              </div>
            </div>
            <div
              class="flex-1 flex flex-col items-start justify-center text-white relative"
            >
              <p class="text-lg font-bold">${item.name}</p>
              <p class="text-sm font-medium">${item.price}$ each</p>
              <div class="flex items-center justify-center mt-4">
                <button
                  class="py-1 px-2 bg-customGray rounded-sm text-black font-medium"
                  onclick="quantityHandler(${key}, ${item.quantity - 1})"
                >
                  -
                </button>
                <div
                  class="px-5 py-[2px] w-full bg-white text-black text-sm font-medium"
                >
                 ${item.quantity}
                </div>
                <button
                  class="py-1 px-2 bg-customGray rounded-sm text-black font-medium"
                  onclick="quantityHandler(${key}, ${item.quantity + 1})"
                >
                  +
                </button>
              </div>
              <div onclick="deleteItemHandler(${key})"
                class="absolute -top-5 -right-4 bg-white p-2 rounded-md flex items-center justify-center cursor-pointer"
              >
                <i class="fa-solid fa-trash text-customRed"></i>
              </div>
              <div class="absolute bottom-0 right-0">
                <p class="text-base font-bold">${item?.price * item?.quantity}$</p>
              </div>
            </div>
          </div>`;
            sideCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity1.innerText = count;
    quantity2.innerText = count;
}

function quantityHandler(key, quantity) {
    if (quantity == 0) {
        delete sideCards[key];
    } else {
        sideCards[key].quantity = quantity;
    }
    reloadCard();
}

const deleteItemHandler = (key) => {
    if (sideCards[key]) {
        delete sideCards[key];
    }
    const addButton = document.querySelector(`#addButton${key}`);
        if (addButton) {
            addButton.disabled = false;
            let selectParagaraph = addButton.querySelector(`#buttonText${key}`);
            if (selectParagaraph) {
                selectParagaraph.innerText = 'Add To Order';
            }
            addButton.classList.add('enabled-button');
        }
    reloadCard();
}





