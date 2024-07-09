import Card from 'react-bootstrap/Card';
import c1 from '../../asets/r1.png';
import { BiDollar } from "react-icons/bi";
import '../CardResidencies/CardResidencies.css'
 
 import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CSwiper.css';

// import required modules
import { Navigation,Pagination  } from 'swiper/modules';

export default function CSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={'4'}
        spaceBetween={30}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        modules={[Navigation ,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card className='Card'  style={{ width: '25rem' , border: 'none' , backgroundColor: '#eeeeee'}}>
          <Card.Img style={{width: '100%'}} variant="top" src={c1} />
            <Card.Body>
             <span className='ddd'><BiDollar />77,458</span>
             <Card.Title style={{fontSize:'24px'}} className='primaryText'>Aliva ayf jourdan</Card.Title>
             <Card.Text style={{fontSize: '12px' , padding: '0px'}}>
               Some quick example  the
               bulk of the card's content.
             </Card.Text>
           </Card.Body>
         </Card>
        </SwiperSlide>


        <SwiperSlide>
        <Card className='Card'  style={{ width: '25rem' , border: 'none' , backgroundColor: '#eeeeee'}}>
          <Card.Img style={{width: '100%'}} variant="top" src={c1} />
            <Card.Body>
             <span className='ddd'><BiDollar />77,458</span>
             <Card.Title style={{fontSize:'24px'}} className='primaryText'>Aliva ayf jourdan</Card.Title>
             <Card.Text style={{fontSize: '12px' , padding: '0px'}}>
               Some quick example  the
               bulk of the card's content.
             </Card.Text>
           </Card.Body>
         </Card>
        </SwiperSlide>
        <SwiperSlide><Card className='Card'  style={{ width: '25rem' , border: 'none' , backgroundColor: '#eeeeee'}}>
          <Card.Img style={{width: '100%'}} variant="top" src={c1} />
            <Card.Body>
             <span className='ddd'><BiDollar />77,458</span>
             <Card.Title style={{fontSize:'24px'}} className='primaryText'>Aliva ayf jourdan</Card.Title>
             <Card.Text style={{fontSize: '12px' , padding: '0px'}}>
               Some quick example  the
               bulk of the card's content.
             </Card.Text>
           </Card.Body>
         </Card></SwiperSlide>
        <SwiperSlide><Card className='Card'  style={{ width: '25rem' , border: 'none' , backgroundColor: '#eeeeee'}}>
          <Card.Img style={{width: '100%'}} variant="top" src={c1} />
            <Card.Body>
             <span className='ddd'><BiDollar />77,458</span>
             <Card.Title style={{fontSize:'24px'}} className='primaryText'>Aliva ayf jourdan</Card.Title>
             <Card.Text style={{fontSize: '12px' , padding: '0px'}}>
               Some quick example  the
               bulk of the card's content.
             </Card.Text>
           </Card.Body>
         </Card></SwiperSlide>
        <SwiperSlide><Card className='Card'  style={{ width: '25rem' , border: 'none' , backgroundColor: '#eeeeee'}}>
          <Card.Img style={{width: '100%'}} variant="top" src={c1} />
            <Card.Body>
             <span className='ddd'><BiDollar />77,458</span>
             <Card.Title style={{fontSize:'24px'}} className='primaryText'>Aliva ayf jourdan</Card.Title>
             <Card.Text style={{fontSize: '12px' , padding: '0px'}}>
               Some quick example  the
               bulk of the card's content.
             </Card.Text>
           </Card.Body>
         </Card></SwiperSlide>
        <SwiperSlide><Card className='Card'  style={{ width: '25rem' , border: 'none' , backgroundColor: '#eeeeee'}}>
          <Card.Img style={{width: '100%'}} variant="top" src={c1} />
            <Card.Body>
             <span className='ddd'><BiDollar />77,458</span>
             <Card.Title style={{fontSize:'24px'}} className='primaryText'>Aliva ayf jourdan</Card.Title>
             <Card.Text style={{fontSize: '12px' , padding: '0px'}}>
               Some quick example  the
               bulk of the card's content.
             </Card.Text>
           </Card.Body>
         </Card></SwiperSlide>
        <SwiperSlide><Card className='Card'  style={{ width: '25rem' , border: 'none' , backgroundColor: '#eeeeee'}}>
          <Card.Img style={{width: '100%'}} variant="top" src={c1} />
            <Card.Body>
             <span className='ddd'><BiDollar />77,458</span>
             <Card.Title style={{fontSize:'24px'}} className='primaryText'>Aliva ayf jourdan</Card.Title>
             <Card.Text style={{fontSize: '12px' , padding: '0px'}}>
               Some quick example  the
               bulk of the card's content.
             </Card.Text>
           </Card.Body>
         </Card></SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
