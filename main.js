import './style.css'

const products = [
  {
    name: 'Camiseta Catzilla',
    price: 42.15,
    seller: 'AwesomeSeller',
    linktoprod:
      'https://www.etsy.com/es/listing/1154453543/catzilla-king-of-pawster-paws-cat-kitten?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Cat&ref=sr_gallery-1-2&pro=1&search_preloaded_img=1&organic_search_click=1',
    image:
      'https://i.etsystatic.com/33503760/c/840/840/75/13/il/700a25/3587037680/il_300x300.3587037680_owgb.jpg'
  },
  {
    name: 'Figuras de Gatos',
    price: 10.99,
    seller: 'NotSoAwesomeSeller',
    linktoprod:
      'https://www.etsy.com/es/listing/1636188559/michitakus-figuras?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Figuras+de+gatos ref=sr_gallery-1-1&local_signal_search=1&search_preloaded_img=1&organic_search_click=1',
    image:
      'https://i.etsystatic.com/48885360/c/3000/2382/0/178/il/449192/5598644456/il_340x270.5598644456_k03n.jpg'
  },
  {
    name: 'Cuadro de gatos',
    price: 49.99,
    seller: 'FantasticSeller',
    linktoprod:
      'https://www.etsy.com/es/listing/1597244136/arte-de-pared-de-dos-gatos-en-la-parte?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Cuadros+de+gatos&ref=sc_gallery-1-8&pro=1&rs=1&sts=1&search_preloaded_img=1&plkey=671417ca2306ecaf3f2b6b3300637463203eea3e%3A1597244136',
    image:
      'https://i.etsystatic.com/37669537/c/1267/1267/287/238/il/d924b0/5356311129/il_300x300.5356311129_pnol.jpg'
  },
  {
    name: 'Kitty Socks',
    price: 9.99,
    seller: 'FantasticSeller',
    linktoprod:
      'https://www.etsy.com/es/listing/1431107486/calcetines-de-talla-unica-para-mujeres?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Calcetines+de+gatos&ref=sr_gallery-1-3&es=1&organic_search_click=1',
    image:
      'https://i.etsystatic.com/26910037/r/il/6dfcc0/4749372640/il_300x300.4749372640_n9xb.jpg'
  },
  {
    name: 'Gatos de Crochet',
    price: 7.28,
    seller: 'NotSoAwesomeSeller',
    linktoprod:
      'https://www.etsy.com/es/listing/1567053873/patron-gatito-amigurumi-crochet-patron?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Gatos+de+Crochet&ref=sr_gallery-1-1&bes=1&sts=1&dd=1&search_preloaded_img=1&organic_search_click=1',
    image:
      'https://i.etsystatic.com/15350484/r/il/3b4660/5341223049/il_300x300.5341223049_lrz1.jpg'
  },
  {
    name: 'El Grito Gatuno',
    price: 11.98,
    seller: 'AwesomeSeller',
    linktoprod:
      'https://www.etsy.com/es/listing/1288716986/cartel-del-gato-el-grito-gato-impresion?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Cat+Scream&ref=sr_gallery-1-1&pro=1&bes=1&sts=1&search_preloaded_img=1&organic_search_click=1',
    image:
      'https://i.etsystatic.com/8136122/c/1481/1481/259/316/il/269abd/5483766024/il_300x300.5483766024_ho6i.jpg'
  },
  {
    name: 'Colgante de Gato',
    price: 44.88,
    seller: 'NotSoAwesomeSeller',
    linktoprod:
      'https://www.etsy.com/es/listing/1288716986/cartel-del-gato-el-grito-gato-impresion?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Cat+Scream&ref=sr_gallery-1-1&pro=1&bes=1&sts=1&search_preloaded_img=1&organic_search_click=1',
    image:
      'https://i.etsystatic.com/40437882/r/il/0c8a66/4683728164/il_300x300.4683728164_jhfi.jpg'
  },
  {
    name: 'Llavero de Gato',
    price: 7.0,
    seller: 'NotSoAwesomeSeller',
    linktoprod:
      'https://www.etsy.com/es/listing/1683227753/llaveros-de-gato-personalizables?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Llaveros+de+gato&ref=sr_gallery-1-1&frs=1&local_signal_search=1&organic_search_click=1',
    image:
      'https://i.etsystatic.com/38846571/r/il/a444b6/5831308351/il_300x300.5831308351_euo0.jpg'
  },
  {
    name: 'Marcapaginas Gatuno',
    price: 5.25,
    seller: 'AwesomeSeller',
    linktoprod:
      'https://www.etsy.com/es/listing/1165807058/marca-el-gato-colgante-el-companero?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Marcapaginas+de+gato&ref=sr_gallery-1-20&organic_search_click=1',
    image:
      'https://i.etsystatic.com/23134102/c/750/750/0/12/il/0a9e70/4447751753/il_300x300.4447751753_iz7g.jpg'
  },
  {
    name: 'Pendientes de Gato',
    price: 12.99,
    seller: 'NotSoAwesomeSeller',
    linktoprod:
      'https://www.etsy.com/es/listing/1106131996/pendientes-de-gato-colgantes-arcilla?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Pendientes+de+gato&ref=sr_gallery-1-7&frs=1&organic_search_click=1',
    image:
      'https://i.etsystatic.com/32280093/c/2227/2227/19/362/il/9fbe64/3581644792/il_300x300.3581644792_73kd.jpg'
  },
  {
    name: 'Bolsa Regalo',
    price: 0,
    seller: 'ModestSeller',
    linktoprod:
      'https://saketos.es/bolsas-de-lino/1728-10-uds-bolsitas-estilo-lino-9-x-12-cm-con-la-impresion-natural-thank-you-2-5903003409861.html',
    image:
      'https://saketos.es/14146-large_default/10-uds-bolsitas-estilo-lino-9-x-12-cm-con-la-impresion-natural-thank-you-2.jpg'
  }
]
let sellers = []

const CreateProducts = (product_list) => {
  if (product_list.length === 0) {
    const productsContainer = document.querySelector('#products')
    productsContainer.innerHTML = '<h2>No hay productos</h2>'
  }
  const productsContainer = document.querySelector('#products')
  product_list.forEach((product) => {
    const productCard = document.createElement('article')
    productCard.className = 'product-card'
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p class="pricep">${product.price}</p>
      <p class="sellerp">${product.seller}</p>
      <a href="${product.linktoprod}" target="_blank">Ver producto</a>
    `
    productsContainer.appendChild(productCard)
  })
}

const CreateHeader = () => {
  const header = document.querySelector('header')
  header.innerHTML = `
  <span class="shop_name">KittyShop VITE</span>
  <img src="./assets/menu.png" alt="menu" class="menu">
  <nav>
      <ul class="menu_list">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Iniciar Sesion</a></li>
          <li><a href="#">🛒Cesta</a></li>
      </ul>
  </nav>
  `
  console.log('creamos el header')
}

const MakeSidebar = () => {
  const FilterZone = document.querySelector('#filters')

  FilterZone.innerHTML = `
    <div class="VendorFilter">
    <select id="seller">
      <option value="All">Todos</option>
    </select>
    </div>
    <div class="PriceFilter">
    <input type="number" id="minPrice" placeholder="Precio Minimo"/><button id="search">🔍</button>
    </div>
    <div class="ResetFilters">
    <button id="reset">Reset</button>
    </div>
  `
}

const MakeFooter = () => {
  const footer = document.querySelector('footer')
  footer.innerHTML = `
  <ul class="socials">
            <li><img src="https://benevolent-gumption-d5158a.netlify.app/assets/instagram.png" alt="Redes"></li>
            <li><img src="https://benevolent-gumption-d5158a.netlify.app/assets/x.png" alt="Redes"></li>
            <li><img src="https://benevolent-gumption-d5158a.netlify.app/assets/tik-tok.png" alt="Redes"></li>
            <li><img src="https://benevolent-gumption-d5158a.netlify.app/assets/youtube.png
            " alt="Redes"></li>
        </ul>
        <p>© 2021 KittyShop VITE</p>
        <ul>
            <li>Privacidad</li>
            <li>Tiendas</li>
            <li>Anuncios</li>
            <li>Regiones</li>
        </ul>
  `
}

const AddEvents = () => {
  document.querySelector('#seller').addEventListener('change', () => {
    const SelectedSeller = document.querySelector('#seller').value
    if (SelectedSeller == 'All') {
      const productsContainer = document.querySelector('#products')
      productsContainer.innerHTML = ''
      CreateProducts(products)
    } else {
      const productsContainer = document.querySelector('#products')
      productsContainer.innerHTML = ''
      const filteredProducts = products.filter(
        (product) => product.seller === SelectedSeller
      )
      CreateProducts(filteredProducts)
    }
  })

  document.querySelector('#search').addEventListener('click', () => {
    const minPrice = Number(document.querySelector('#minPrice').value)
    //convert the string to a number
    const productsContainer = document.querySelector('#products')
    productsContainer.innerHTML = ''
    console.log(typeof minPrice)
    const filteredProducts = products.filter(
      (product) => Number(product.price) < minPrice
    )
    CreateProducts(filteredProducts)
  })

  document.querySelector('#reset').addEventListener('click', () => {
    const productsContainer = document.querySelector('#products')
    productsContainer.innerHTML = ''
    CreateProducts(products)
    document.querySelector('#minPrice').value = ''
    document.querySelector('#seller').value = 'All'
    console.log('reset')
  })
}

const ExtractSellers = (products) => {
  const sellers = []
  products.forEach((product) => {
    if (!sellers.includes(product.seller)) {
      sellers.push(product.seller)
    }
  })
  const select = document.querySelector('#seller')
  sellers.forEach((seller) => {
    const option = document.createElement('option')
    option.value = seller
    option.textContent = seller
    select.appendChild(option)
  })
}

CreateProducts(products)
CreateHeader()
MakeSidebar()
ExtractSellers(products)
AddEvents()
MakeFooter()
