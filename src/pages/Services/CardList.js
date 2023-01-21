import {Card, Col, Row} from "antd";

export function CardList (array){
    return(
        <Row gutter={16} align='stretch' >
            {array.map((services, index) => {
                return(
                    <Col md={8}  xs={24} key={index} >
                        <Card title={services.title}  bordered={true} style={{textAlign: 'center', position: 'relative',height: '100%',}}>
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
    )
}

