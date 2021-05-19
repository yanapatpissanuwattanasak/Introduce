import {Image,Card,Button} from 'react-bootstrap' 
function Award() {
return(
    <div id='award' style={{marginTop:50}}>
        <div className="d-flex justify-content-center text-center " >
            <h3>Award</h3>
        </div>
        <br/>
    <div className="d-flex justify-content-center text-center " >
      
         
        <div className="d-flex justify-content-between" style={{width:'60%'}}>
        
            <Card style={{ width: '30rem' }}>
          
            <Card.Body>
                <Card.Title>2nd place , Eastern</Card.Title>
                    <Image  src="https://storage.cloud.google.com/node-bright/Cabling-Contest-2019-01.jpg" rounded style={{width:350}} />
                <Card.Text>
                <br/>
                    Link Cabling Contest No.7
                </Card.Text>
                <a href='/Link'><Button variant="outline-secondary">Detail</Button></a>
            </Card.Body>
            </Card>
            <Card style={{ width: '30rem' }}>
          
            <Card.Body>
                
                
              
                <Card.Title>7th place , Thailand</Card.Title>
                    <Image  src="https://storage.cloud.google.com/node-bright/152238920_150767946872423_5324043919728393442_n.jpg" rounded style={{width:350}} />
                <Card.Text>
                <br/>
                    TESA Top Gun 2021 At Siam University
                </Card.Text>
                <a href = '/Topgun'><Button variant="outline-secondary">Detail</Button></a>
            </Card.Body>
            </Card>
        </div>
    </div>
    <br/><br/><br/><br/>
    </div>
)
}
export default Award