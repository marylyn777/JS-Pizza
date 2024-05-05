const pizza_info = [
  {
    id: 1,
    icon: 'assets/images/pizza_7.jpg',
    title: "Імпреза",
    type: 'М’ясна піца',
    content: {
      meat: ['балик', 'салямі'],
      chicken: ['куриця'],
      cheese: ['сир моцарелла', 'сир рокфорд'],
      pineapple: ['ананаси'],
      additional: ['томатна паста', 'петрушка']
    },
    small_size: {
      weight: 370,
      size: 30,
      price: 99
    },
    big_size: {
      weight: 660,
      size: 40,
      price: 169
    },
   
    is_popular: true

  },
  {
    id: 2,
    icon: 'assets/images/pizza_2.jpg',
    title: "BBQ",
    type: 'М’ясна піца',
    content: {
      meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
      cheese: ['сир домашній'],
      mushroom: ['шампінйони'],
      additional: ['петрушка', 'оливки']
    },
    small_size: {
      weight: 460,
      size: 30,
      price: 139
    },
    big_size: {
      weight: 840,
      size: 40,
      price: 199
    },
    is_popular: true
  },
  {
    id: 3,
    icon: 'assets/images/pizza_1.jpg',
    title: "Міксовий поло",
    type: 'М’ясна піца',
    content: {
      meat: ['вітчина', 'куриця копчена'],
      cheese: ['сир моцарелла'],
      pineapple: ['ананаси'],
      additional: ['кукурудза', 'петрушка', 'соус томатний']
    },
    small_size: {
      weight: 430,
      size: 30,
      price: 115
    },
    big_size: {
      weight: 780,
      size: 40,
      price: 179
    },
    is_new: true,
  },
  {
    id: 4,
    icon: 'assets/images/pizza_5.jpg',
    title: "Сициліано",
    type: 'М’ясна піца',
    content: {
      meat: ['вітчина', 'салямі'],
      cheese: ['сир моцарелла'],
      mushroom: ['шампінйони'],
      additional: ['перець болгарський', 'соус томатний']
    },
    small_size: {
      weight: 450,
      size: 30,
      price: 111
    },
    big_size: {
      weight: 790,
      size: 40,
      price: 169
    }
  },
  {
    id: 17,
    icon: 'assets/images/pizza_3.jpg',
    title: "Маргарита",
    type: 'Вега піца',
    content: {
      cheese: ['сир моцарелла', 'сир домашній'],
      tomato: ['помідори'],
      additional: ['базилік', 'оливкова олія', 'соус томатний']
    },
    small_size: {
      weight: 370,
      size: 30,
      price: 89
    }
  },
  {
    id: 43,
    icon: 'assets/images/pizza_6.jpg',
    title: "Мікс смаків",
    type: 'М’ясна піца',
    content: {
      meat: ['ковбаски'],
      cheese: ['сир моцарелла'],
      mushroom: ['шампінйони'],
      pineapple: ['ананаси'],
      additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
    },
    small_size: {
      weight: 470,
      size: 30,
      price: 115
    },
    big_size: {
      weight: 780,
      size: 40,
      price: 180
    }
  },
  {
    id: 90,
    icon: 'assets/images/pizza_8.jpg',
    title: "Дольче Маре",
    type: 'Морська піца',
    content: {
      ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
      cheese: ['сир моцарелла'],
      additional: ['оливкова олія', 'вершки']
    },
    big_size: {
      weight: 845,
      size: 40,
      price: 399
    }
  },
  {
    id: 6,
    icon: 'assets/images/pizza_4.jpg',
    title: "Россо Густо",
    type: 'Морська піца',
    content: {
      ocean: ['ікра червона', 'лосось копчений'],
      cheese: ['сир моцарелла'],
      additional: ['оливкова олія', 'вершки']
    },
    small_size: {
      weight: 400,
      size: 30,
      price: 189
    },
    big_size: {
      weight: 700,
      size: 40,
      price: 299
    }
  }
];




let setting = {
  sort: 'all',
  total_pizza: 8,
  basket: {
    data: [],
    total_cost: 0
  },
  pizzas: pizza_info
}
const H = {};

const L = {
  get : () => JSON.parse(localStorage.getItem('setting')),
  set : () => localStorage.setItem('setting',JSON.stringify(setting)),
}

const conncectH = (...arrs) => arrs.forEach(id => H[id] = document.querySelector('#' + id))
conncectH('amountOfChoicePizza', 'differentPizzas', 'countGoogs', 'nameSort', 'all_sum', 'pizzas', 'goodsBasket','removeAllBasket')

const createTeg = (div, className, text = null, ...tegs) => {
  const teg = document.createElement(div);
  className && teg.classList.add(className);
  text && (teg.textContent = text);
  tegs.length && teg.append(...tegs);
  return teg
}

const creatTotalSum = () => {
  setting.basket.total_cost = setting.basket.data.reduce((prev, cur) => prev + (cur.price * cur.count), 0);
  H.all_sum.textContent = setting.basket.total_cost;
  L.set()
}

const createGood = (elem) => {

  const sizeText = elem.type === 'Big' ? 'Велика' : 'Мала'
  const h2 = createTeg('h2', null, `${elem.title} (${sizeText})`)

  const imgS = createTeg('img')
  imgS.src = "./assets/images/size-icon.svg";
  const spanS = createTeg('span', null," " + elem.size)

  const imgW = createTeg('img')
  imgW.src = "./assets/images/weight.svg";
  const spanW = createTeg('span', null," " + elem.weight)



  const pizzaSizeD = createTeg('div', "pizza-size-d", null, imgS, spanS)
  const pizzaSizeW = createTeg('div', "pizza-size-d", null, imgW, spanW)

  const goodCD = createTeg('div', 'good-basket-c-date', null, pizzaSizeD, pizzaSizeW)


  const p = createTeg('p', 'good-basket-price', elem.count * elem.price + 'грн')
  const buttonMinus = createTeg('button', 'good-basket-minus', '-')
  const span = createTeg('span', 'good-basket-amount', elem.count)
  const buttonPlus = createTeg('button', 'good-basket-plus', '+')
  const buttonCancel = createTeg('button', 'good-basket-close', 'X')


  const goodGC = createTeg('div', 'good-basket-g-c', null, p, buttonMinus, span, buttonPlus, buttonCancel)

  const goodGLeft = createTeg('div', 'good-basket-g-left', null, h2, goodCD, goodGC)

  const img = createTeg('img')
  img.src = elem.img;
  const goodGRight = createTeg('div', 'good-basket-g-right', null, img)

  const goodG = createTeg('div', 'good-basket-g', null, goodGLeft, goodGRight)
  H.goodsBasket.append(goodG)

  // logical
  buttonMinus.onclick = () => {
    elem.count--;
    if (elem.count === 0) {
      goodG.remove();
      setting.basket.data = setting.basket.data.filter(el => el.id !== elem.id );
      H.countGoogs.textContent = setting.basket.data.length;
    } else {
      p.textContent = elem.count * elem.price + 'грн';
      span.textContent = elem.count;
    }

    creatTotalSum()
  }
  buttonCancel.onclick = () => {
    goodG.remove();
    setting.basket.data = setting.basket.data.filter(el => el.id !== elem.id);
    creatTotalSum()
    H.countGoogs.textContent = setting.basket.data.length;
  }
  buttonPlus.onclick = () => {
    elem.count++;
    p.textContent = elem.count * elem.price + 'грн';
    span.textContent = elem.count;
    creatTotalSum()
  }
  // logical
}

const createAllGoods = () => {

  H.goodsBasket.textContent = '';
  creatTotalSum()
  setting.basket.data.forEach(createGood);

  // goodsBasket

};

const addBasket = (elem, el) => {
  const pizza = setting.basket.data.find(pi => pi.id === (elem.id + el.type))
  if (pizza) {
    pizza.count++;
  }
  else {
    setting.basket.data.push({
      title: elem.title,
      count: 1,
      ...el,
      id: elem.id + el.type,
      img: elem.icon
    })
  }
  updateOrder()
  // updateBasket()
}

const createPizza = (elem) => {
  const imgG = createTeg('img', "pizza-g-img")
  imgG.src = elem.icon;

  const h2 = createTeg('h2', "", elem.title)
  const p = createTeg('p', "categori", elem.type)

  // desc
  let descriptioText = ''
  for (const key in elem.content) {
    descriptioText += elem.content[key].join(', ') + ', '
  }
  descriptioText = descriptioText.slice(0, descriptioText.length - 2);
  const pD = createTeg('p', "description", descriptioText)

  // pizza-size-g
  const pizzaSizeG = createTeg('div', "pizza-size-g")

  const pizza_size = []
  elem.small_size && pizza_size.push({ ...elem.small_size, type: 'Small' });
  elem.big_size && pizza_size.push({ ...elem.big_size, type: 'Big' });
  pizza_size.forEach(el => {
    const imgS = createTeg('img')
    imgS.src = "./assets/images/size-icon.svg";
    const spanS = createTeg('span', null, el.size)

    const imgW = createTeg('img')
    imgW.src = "./assets/images/weight.svg";
    const spanW = createTeg('span', null, el.weight)

    const pizzaSizeD = createTeg('div', "pizza-size-d", null, imgS, spanS)
    const pizzaSizeW = createTeg('div', "pizza-size-d", null, imgW, spanW)

    const pricesContainer = createTeg('div', null);
    
    if (el.price) {
      const h3 = createTeg('h3', "pizza-size-price", el.price);
      pricesContainer.append(h3);
    }
    
    const p = createTeg('p', "pizza-size-value", 'грн.')
    const button = createTeg('button', "pizza-size-buy", 'Купити')
    
    button.onclick = () => addBasket(elem, el)
    
    const pizzaSizeC = createTeg('div', "pizza-size-c", null, pizzaSizeD, pizzaSizeW, pricesContainer, p, button)
    
    
    pizzaSizeG.append(pizzaSizeC)
  })
  
  
  const pizzaC = createTeg('div', "pizza-c", null, h2, p, pD, pizzaSizeG)
  const pizzaG = createTeg('div', "pizza-g", null, imgG, pizzaC)

  if(elem.is_popular){
    const pizzaAction = createTeg('div', 'pizza-popular', 'Популярна');
    pizzaG.append(pizzaAction)
  }

  if(elem.is_new){
    const pizzaAction = createTeg('div', 'pizza-new', 'Нова');
    pizzaG.append(pizzaAction)
  }
  H.pizzas.append(pizzaG)


}

const createAll = () => {
  H.pizzas.textContent = '';
  setting.pizzas.forEach(createPizza)
}

const updateOrder = () => {
  createAllGoods();
  H.amountOfChoicePizza.textContent = setting.pizzas.length;
  H.countGoogs.textContent = setting.basket.data.length;
  H.all_sum.textContent = setting.basket.total_cost
}

const sortPizza = (value, slot) => {
  if (value === '') setting.pizzas = pizza_info;
  else if (slot) setting.pizzas = pizza_info.filter(el => el.content[value])
  else setting.pizzas = pizza_info.filter(el => el.type === value)

  createAll()


}

const choiceSort = (e) => {
  const teg = e.target;
  if (teg.tagName !== 'BUTTON') return;

  const active = document.querySelector('.differentPizzas .active');
  active.classList.remove('active');
  teg.classList.add('active');

  setting.sort = teg.textContent;
  H.nameSort.textContent = setting.sort;

  sortPizza(teg.value, teg.slot)
  updateOrder()
}

const removeGoods = () => {
setting.basket.data = []
setting.basket.total_cost = 0;
updateOrder()
}

const startCheckL = () => {
 const settin =  L.get();
 if(settin === null) return;
 setting = settin;
 updateOrder();
}




// events 
H.differentPizzas.onclick = choiceSort;
H.removeAllBasket.onclick = removeGoods;


// start 
; (function () {

 startCheckL()

  updateOrder()
  createAll()
})();



