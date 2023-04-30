import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App(){
    const data =[
        {
            productTitle:"free",
            productTitlee:"$0/month",
       user:"Single User",    
         storage:"5GB Storage" ,
         poject:"Unlimited Public Projects",
         access:"Community Access",
         projects:"Unlimited Private Projects",
         support:"Dedicated Phone Support",
         domain:"Free Subdomain",
         report:"Monthly Status Reports"

       },
       {
        productTitle:"Plus",
        productTitlee:"$9/month",
        user:"5 Users",    
        storage:"50GB Storage" ,
        poject:"Unlimited Public Projects",
        access:"Community Access",
        projects:"Unlimited Private Projects",
        support:"Dedicated Phone Support",
        domain:"Free Subdomain",
        report:"Monthly Status Reports"

       },
       {
        productTitle:"Pro",
        productTitlee:"$49/month",
        user:"Unlimited Users",    
        storage:"150GB Storage" ,
        poject:"Unlimited Public Projects",
        access:"Community Access",
        projects:"Unlimited Private Projects",
        support:"Dedicated Phone Support",
        domain:"Free Subdomain",
        report:"Monthly Status Reports"

       }
    ]
    
    return(
        <div className='App'>
            <div className='card-container'>
            {data.map((product,idx)=>(
                <Product
                prod={product}
                
                />
            ))}

</div>
        </div>
    );
}
export default App;

function Product({prod}){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Title variant="top"  /> 
        <Card.Body>
          <Card.Title>{prod.productTitle}</Card.Title>
          <Card.Title>{prod.productTitlee}</Card.Title>
          <Card.Text><span>&#10003;</span> {prod.user}</Card.Text>
          <Card.Text><span>&#10003;</span>{prod.storage}</Card.Text>
          <Card.Text><span>&#10003;</span>{prod.access}</Card.Text>
          <Card.Text><span>&#10003;</span>{prod.projects}</Card.Text>
          <Card.Text><span>&#10003;</span>{prod.support}</Card.Text>
          <Card.Text><span>&#10003;</span>{prod.domain}</Card.Text>
          <Card.Text><span>&#10003;</span>{prod.report}</Card.Text>
          
          <Button variant="primary">BUTTON</Button>
        </Card.Body>
      </Card>
    )
}