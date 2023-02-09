import {useState} from "react";
import {Button} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const comments =[
    {
        id:1,
        date: 'December 2022',
        comment : ' “This is the only salon that I trust to properly deal with my hair. Their extensive knowledge and skill are truly unmatched.” -Nicky, MegaProf '
    },
    {
        id:2,
        date: 'May 2021',
        comment : ' “I had a signature facial with and loved it! Left with glowing skin and a pleasant experience! Highly recommend!” -Olivia, Indianapolis '
    },
    {
        id:3,
        date: 'June 2022',
        comment : ' “Love this place! I always come here to get my nails and eyebrows done they do an awesome job and are very friendly. Im so picky about my eyebrows and i always leave satisfied!” -Cintia, BeautySecrets '
    },{
        id:4,
        date: 'September 2022',
        comment : ' “My experience was absolutely AMAZING!!!! The salon is beautiful.\n' +
            'Most importantly, each station was clean & tidy! ” -Ashley, Facemat '
    },
    {
        id:5,
        date: 'November 2022',
        comment : ' “They all knew what they were doing, they were all great at their job and I love how my hair came out! Definitely recommend coming here” -Mary, Cosmopro '
    },
]


export const CommentsList = () => {
    const [currentComment, setCurrentComment] = useState(0);
    const handleCommentChange = (changeRatio) => {
        if(changeRatio > 0){
            setCurrentComment((commentIndex) => commentIndex === comments.length - 1 ? 0 : commentIndex+1 )
        }
        if(changeRatio < 0){
            setCurrentComment((commentIndex) => commentIndex === 0 ?  comments.length-1  : commentIndex-1 )
        }
    }
    return (
        <div className="reviews" >
            <Button type='text' onClick = {() => handleCommentChange(-1)  } ><LeftOutlined style={{color: 'white'}}/></Button>
            <div><h2 id={"costumer-review"}>{comments[currentComment].comment}</h2>
            <p id={"date"}>
                {comments[currentComment].date}
            </p>
          </div>

            <Button type='text'  onClick = {() => handleCommentChange(1) }><RightOutlined style={{color: 'white'}}/></Button>
        </div>
    )
}