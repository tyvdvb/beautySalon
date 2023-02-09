import {Button} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {useState} from "react";


const photos = [
 {
  id: 1,
  img:'https://i.pinimg.com/564x/72/ab/a1/72aba17720b6bb33d1579e542cf9b7ba.jpg'
 },
    {
        id: 2,
        img:'https://i.pinimg.com/564x/4f/88/49/4f884986738805707a7914db0d3b330a.jpg'
    },
    {
        id: 3,
        img:'https://i.pinimg.com/564x/97/fb/7c/97fb7ca30f69ce2cf670aea38d893018.jpg'
    },
    {
        id: 4,
        img:'https://i.pinimg.com/564x/76/cc/19/76cc19dba29a6e4f7b5c7e5d5926f0c8.jpg'
    },
    {
        id: 5,
        img:'https://i.pinimg.com/564x/16/09/68/16096897ec82934d499d6cfcd207f4a0.jpg'
    },
    {
        id: 6,
        img:'https://i.pinimg.com/564x/c5/17/48/c517487be04a212ef118cecf1126c752.jpg'
    },
]

export const Gallery = () => {

    const [currentPhoto, setCurrentPhoto] = useState(1);
    const handlePhotoChange = (changeRatio) => {
        if(changeRatio > 0){
            setCurrentPhoto((commentIndex) => commentIndex === photos.length - 1 ? 0 : commentIndex+1 )
        }
        if(changeRatio < 0){
            setCurrentPhoto((commentIndex) => commentIndex === 0 ?  photos.length-1  : commentIndex-1 )
        }
    }
    return (
        <div className="salonPictures" >
        <Button type='text' onClick = {() => handlePhotoChange(-1)  } ><LeftOutlined  className='arrow' /></Button>
 <div className='salonPictures'>
     {/*<img src={photos[currentPhoto-1 >= 0 ? currentPhoto-1 : photos.length-1].img} style={{width: '300px', height: '300px'}}/>*/}
     <img className='media' src={photos[currentPhoto].img} />
     {/*<img src={photos[currentPhoto+1 < photos.length ? currentPhoto+1 : 0].img} style={{width: '300px', height: '300px'}}/>*/}
 </div>

 <Button type='text'  onClick = {() => handlePhotoChange(1) }><RightOutlined className='arrow' /></Button>

        </div>
    )
 }