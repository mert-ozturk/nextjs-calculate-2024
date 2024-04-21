'use client'
import React, { useEffect, useState } from 'react'
import ilkbahar from '@/public/images/ilkbahar.jpg'
import yaz from '@/public/images/ilkbahar.jpg'
import Image from 'next/image'
const Saat = () => {
    const [time,setTime] = useState(new Date())
    const [currentMonth, setCurrentMonth] = useState('');
    const [currentSeason, setCurrentSeason] = useState('');

    const mevsim = () => {
      if(currentSeason === 'ilk bahar' ){
        return  <Image src={ilkbahar} alt='' width={120} height={120} />
      }else if (currentSeason === 'Yaz') {
       return  <Image src={yaz} alt='' width={120} height={120} />
      }
    }

    useEffect(() => {
      const date = new Date();
      const month = date.getMonth();
  
      // Ayı belirle
      let monthName = '';
      switch (month) {
        case 0:
          monthName = 'Ocak';
          break;
        case 1:
          monthName = 'Şubat';
          break;
        case 2:
          monthName = 'Mart';
          break;
        case 3:
          monthName = 'Nisan';
          break;
        case 4:
          monthName = 'Mayıs';
          break;
        case 5:
          monthName = 'Haziran';
          break;
        case 6:
          monthName = 'Temmuz';
          break;
        case 7:
          monthName = 'Ağustos';
          break;
        case 8:
          monthName = 'Eylül';
          break;
        case 9:
          monthName = 'Ekim';
          break;
        case 10:
          monthName = 'Kasım';
          break;
        case 11:
          monthName = 'Aralık';
          break;
        default:
          monthName = '';
      }
  
      // Mevsimi belirle
      let season = '';
      switch (month) {
        case 2:
        case 3:
        case 4:
          season = 'ilk bahar' ;
          
          break;
        case 5:
        case 6:
        case 7:
          season = 'Yaz';
          break;
        case 8:
        case 9:
        case 10:
          season = 'Sonbahar';
          break;
        default:
          season = 'Kış';
      }
  
      setCurrentMonth(monthName);
      setCurrentSeason(season);
    }, []);

    

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date())
        },1000)   
      return () => clearInterval(interval)  
    },[])

  return (
    <div>
        <h1>Güncel Ay: {currentMonth}</h1>
         
      <h1>Güncel Mevsim:{mevsim()} </h1>
      
       <h1>Anlık Saat:</h1>
      <h2>{time.toLocaleTimeString()}</h2>
      <h2>{time.toLocaleDateString()}</h2>
    </div>
  )
}

export default Saat
