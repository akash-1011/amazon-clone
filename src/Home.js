import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <img 
                className='home-image'
                src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg'
                alt=''
            />
            <div className='home-row'>
                <Product 
                    id='123456'
                    title='React.js Book: Learning React JavaScript Library From Scratch Kindle Edition'
                    price={11.56}
                    rating={5}
                    image='https://miro.medium.com/max/350/1*SfuplRvBv0N7gWxpIy6PUQ.png'
                />
                <Product 
                    id='456123'
                    title='Apple iPhone 11 (64GB) - Purple'
                    price={450}
                    rating={5}
                    image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566960958082'
                />
            </div>
            <div className='home-row'>
                <Product 
                    id='741852'
                    title='New Apple MacBook Air (13-inch, 1.1GHz Dual-core 10th-Generation Intel Core i3 Processor, 8GB RAM, 256GB Storage) - Silver'
                    price={800}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81MkiDFq80L._SL1500_.jpg'
                />
                <Product 
                    id='852963'
                    title='Samsung 165.1 cm (65 inch) Ultra HD 8K QLED Smart TV, 8 Series 65Q800T'
                    price={750}
                    rating={5}
                    image='https://www.reliancedigital.in/medias/Samsung-65Q800T-Television-491895035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNTU2NDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ5L2hmYS85MzI2MTg5NDc3OTE4LmpwZ3wwNzgxMWNiODdhYmQ4MzMzYTlmM2Y0ODY4NTlhZjdkMWNhZWQ2ZWIxMmNjYWQ4NmUyMTk3Zjk4NWFiODBiNTlm'
                />
                <Product 
                    id='654987'
                    title='Samsung 8 Kg Front Load Fully Automatic Washing Machine, WW80K54E0UX'
                    price={110}
                    rating={5}
                    image='https://www.reliancedigital.in/medias/Samsung-WW80K54E0UX-TL-Washing-Machines-491891856-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMTYyMTB8aW1hZ2UvanBlZ3xpbWFnZXMvaGYxL2g3Ni85Mzg2MDQ2NzE3OTgyLmpwZ3w1MGRhNzEyOWFlOTI4NWE4ZDk3ODQ5YjJhODI1MDUwNGFkNDNiODk5YzQ0MjFkZmFiNjBkNDA0NTExNTNiNzhh'
                />
            </div>
            <div className='home-row'>
                <Product 
                    id='246813'
                    title='SUPERIA XTREME (5 STAR)'
                    price={506}
                    rating={5}
                    image='https://carriermideaindia.com/Admin/Images/Superia-Xtreme-WiFi-(5-Star)-FlexiCool-Inverter.jpg'
                />
            </div>
        </div>
    )
}

export default Home