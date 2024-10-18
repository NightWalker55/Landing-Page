import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/BreadCrumb/BreadCrumb';
import Header from '../../components/Header/Header';
import CartModal from '../../components/CartModal/CartModal';
import '../ProductPage/ProductPage.css'
import ImageSection from '../../components/ImageSection/ImageSection';
import Sizes from '../../components/Sizes/Sizes';
import Colors from '../../components/Colors/Colors';
import Description from '../../components/Description/Description';
import CartTotal from '../../components/CartTotal/CartTotal';
import Options from '../../components/Options/Options';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cartTotal, setCartTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [price, setPrice] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + product.images.length) % product.images.length
    );
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://landing-page-server-snowy.vercel.app/");
        const data = await res.json();
        setProduct(data[0]);
        setPrice(data[0].price);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    if (product) {
      const total = price * quantity;
      setCartTotal(total);
    }
  }, [quantity, price, product]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const handleColorChange = (colorOption) => {
    setColor(colorOption);
  };

  const handleSizeChange = (sizeOption) => {
    setSize(sizeOption);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleCartClick = () => {
    if (color && size) {
      setShowModal(true);
    }
  };

  const handleCartPlus = ()=>{
    setQuantity(quantity + 1);
  }

  const handleCartMinus = ()=>{
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header amount={quantity} showModal={handleCartClick}/>
      <div className='horizontal-line'></div>
      <div className="product-page">

        <ImageSection currentIndex={currentIndex}
         images={product.images} 
         prevImage={prevImage} 
         nextImage={nextImage} 
         setCurrentIndex={setCurrentIndex}/>

        <div className='details-section'>
          <Breadcrumb />
          <Options 
          name={product.name}
          price={product.price}
          subtitle={product.subtitle}
          />
         
            <div className='horizontal-line'></div>
            
              <Colors colors={product.colorOptions} 
              color={color} 
              handleColorChange={handleColorChange}/>
              
          
              <div className='horizontal-line'></div>
             
                <Sizes 
                sizes={product.sizeOptions}
                handleSizeChange={handleSizeChange}
                size={size}
                />


            <div className='horizontal-line'></div>

            <CartTotal 
            quantity={quantity}
            color={color}
            size={size}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            cartTotal={cartTotal}
            setShowModal={setShowModal}
            />

                  
                </div>
                <div className='horizontal-line'></div>
              </div>
      
        <Description 
        description={product.description}
        benefits={product.benefits}
        details={product.details}
        moreDetails={product.moreDetails}
        />
        
      
      <CartModal
        showModal={showModal}
        onClose={handleModalClose}
        product={product}
        color={color}
        size={size}
        quantity={quantity}
        total={cartTotal}
        plus={handleCartPlus}
        minus={handleCartMinus}
      />
    </div>
  );
};

export default ProductPage;
