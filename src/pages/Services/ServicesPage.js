import React, {useEffect} from "react";
import {HairCardsItems, MakeUpCardsItems, NailCardsItems, WaxCardsItems} from "./CardsItems";
import {Card, Col, Row} from "antd";
import './style.scss'
import {useSearchParams} from "react-router-dom";
import {CardList} from "./CardList";




export const ServicesPage = () => {
    const [searchParams,setSearchParams] = useSearchParams();
     useEffect( () => {
         const scrollTo = searchParams.get('scrollTo')
         if (scrollTo){
             const element = document.getElementById(scrollTo)
             element?.scrollIntoView({behavior : "smooth", block : "start"})
             setSearchParams({ });
         }
     },[searchParams.get('scrollTo')])
    return (
        <div>

            <div className='serviceTitle'  id='hair'>
                <img className='servicesImg' src='https://pastels-salon.com/wp-content/uploads/2022/02/HAIR-2.jpg' />
                <div className='containerItem'  >
                <h2>HAIR</h2>
                <p className='titleDescription'>We believe that beauty is different for each individual and so we never mass produce. During your consultation,
                our expert stylist will consider your features, your personal style, your hair goals, as well as your lifestyle,
                to ensure you can achieve a flattering bespoke look you love – all day, every day!</p>
                </div>
            </div>

            <div className='ServicesCards'>
                <Row gutter={16} align={'stretch'}>
            {HairCardsItems.map((services, index) => {
                return(
                        <Col md={12}  xs={24} key={index}>
                            <Card title={services.title}  bordered={true}   style={{textAlign: 'center', marginBottom: '20px', position: 'relative',height: '100%',}}>
                                {services.prices?.map((description, index) => (
                                    <Row key={index} justify='space-between' style={{padding:'10px'}}>
                                        <span>{description.label}</span>
                                        <span>{description.price}</span>
                                    </Row>
                                ))}
                            </Card>
                        </Col>

                )

            })}
                </Row>
            </div>

            <div className='serviceTitle' id="nails" >
                <div className='containerItem' >
            <h2>NAILS</h2>
            <p className='titleDescription'>With a menu brimming with the latest and best beauty treatments, an expert beauty team on hand that will provide you
                with helpful tips and advice, we guarantee you will always look and feel BeYOUtiful</p>
                </div>
                <img src='https://i.pinimg.com/564x/d1/9d/34/d19d348bf7646b15a01998e951d9cce9.jpg'  />

            </div>
            <div className='ServicesCards'>
                <Row gutter={16} align='stretch'>
                    {NailCardsItems.map((services, index) => {
                        return(
                            <Col md={8}  xs={24} key={index}>
                                <Card title={services.title}  bordered={true}  style={{textAlign: 'center', marginBottom: '20px', position: 'relative',height: '100%',}}>
                                    {services.prices?.map((description, index) => (
                                        <Row key={index} justify='space-between' style={{padding:'10px'}}>
                                            <span>{description.label}</span>
                                            <span>{description.price}</span>
                                        </Row>
                                    ))}
                                </Card>
                            </Col>

                        )

                    })}
                </Row>
            </div>


            <div className='serviceTitle' id='makeup'>
                <img src='https://i.pinimg.com/564x/ba/9a/61/ba9a615d168f270e0d5485260c5672ec.jpg' className='leftSide' />
                <div className='containerItem'>
            <h2>MAKEUP</h2>
            <p className='titleDescription'>With an array of treatments including express on offer, our spray tanning expert can tailor-make a tanning treatment to
                give you your own perfectly natural-looking glow that will fade beautifully– and all in the comfort of your own home!</p>
                </div>
            </div>
            <div className='ServicesCards'>
                <Row gutter={16} align='stretch'>
                    {MakeUpCardsItems.map((services, index) => {
                        return(
                            <Col md={12}  xs={24} key={index}>
                                <Card title={services.title}  bordered={true} style={{textAlign: 'center', marginBottom: '20px', position: 'relative',height: '100%',}}>
                                    {services.prices?.map((description, index) => (
                                        <Row key={index} justify='space-between' style={{padding:'10px'}}>
                                            <span>{description.label}</span>
                                            <span>{description.price}</span>
                                        </Row>
                                    ))}
                                </Card>
                            </Col>

                        )

                    })}
                </Row>
            </div>

            <div className='serviceTitle' id='wax'>
                <div className='containerItem'>
            <h2 >WAX IT</h2>
            <p className='titleDescription'>Our only priority is to deliver amazing service and a luxurious waxing experience for men and women.
                Whether it’s as simple as a brow wax, or as involved as a Brazilian wax, we will get you smooth quickly and with less ouch. </p>
                </div>
                <img src='https://i.pinimg.com/564x/35/00/99/35009978728d8f74053dd2a1602512b6.jpg' />
            </div>
            <div className='ServicesCards'>
                {/*<Row gutter={16} align='stretch' >*/}
                {/*    {WaxCardsItems.map((services, index) => {*/}
                {/*        return(*/}
                {/*            <Col md={8}  xs={24} key={index} >*/}
                {/*                <Card title={services.title}  bordered={true} style={{textAlign: 'center', position: 'relative',height: '100%',}}>*/}
                {/*                    {services.prices?.map((description, index) => (*/}
                {/*                        <Row key={index} justify='space-between' style={{padding:'10px'}}>*/}
                {/*                            <span>{description.label}</span>*/}
                {/*                            <span>{description.price}</span>*/}
                {/*                        </Row>*/}
                {/*                    ))}*/}
                {/*                </Card>*/}
                {/*            </Col>*/}

                {/*        )*/}

                {/*    })}*/}
                {/*</Row>*/}
                <CardList array={WaxCardsItems} />
            </div>
        </div>

    );
}