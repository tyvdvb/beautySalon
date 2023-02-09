import Meta from "antd/es/card/Meta";
import {Card} from "antd";
import {Link} from "react-router-dom";

export const StylistCard = ({stylist}) =>{
    return(
        <Card
            className="stylistCard"
            hoverable
            cover={
                <img
                    className="imgStylist"
                    alt="example"
                    src={stylist.img}
                    style={{ height: '400px' }}
                />
            }
        >
            <Meta title={stylist.name} description={stylist.services} />
            <Link to={'/book'}><button className="bookBtn" >BOOK APPOINTMENT</button></Link>
        </Card>
    )
}
