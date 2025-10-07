import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
    return (
        <>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://sg-files.apjonlinecdn.com/landingpages/category-family/hp-laptops-family/images/w100_hero_mobile_v2.jpg"
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Card.Title>HP Pavilion</Card.Title>
                        <Card.Text>Intel i5 • 8GB RAM • 512GB SSD</Card.Text>
                        <Button variant="primary" className="me-2">Add to Cart</Button>
                        <Button variant="success">Buy Now</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://shop.datasoftcomnet.com/wp-content/uploads/2020/11/Latitude-3410-Image-1.jpg"
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Card.Title>Dell Inspiron</Card.Title>
                        <Card.Text>Intel i7 • 16GB RAM • 1TB SSD</Card.Text>
                        <Button variant="primary" className="me-2">Add to Cart</Button>
                        <Button variant="success">Buy Now</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://cdn.moglix.com/p/oyFCxfqhcrD69-xxlarge.jpg"
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Card.Title>Lenovo ThinkPad</Card.Title>
                        <Card.Text>Ryzen 5 • 8GB RAM • 512GB SSD</Card.Text>
                        <Button variant="primary" className="me-2">Add to Cart</Button>
                        <Button variant="success">Buy Now</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Card.Title>MacBook Air</Card.Title>
                        <Card.Text>Apple M1 • 8GB RAM • 256GB SSD</Card.Text>
                        <Button variant="primary" className="me-2">Add to Cart</Button>
                        <Button variant="success">Buy Now</Button>
                    </Card.Body>
                </Card>

            </div>
            <br></br>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://sg-files.apjonlinecdn.com/landingpages/category-family/hp-laptops-family/images/w100_hero_mobile_v2.jpg"
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Card.Title>HP Pavilion</Card.Title>
                        <Card.Text>Intel i5 • 8GB RAM • 512GB SSD</Card.Text>
                        <Button variant="primary" className="me-2">Add to Cart</Button>
                        <Button variant="success">Buy Now</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAbYMMJpl8oomTjCVcu6IBVnHE8y4S54jqw&s"
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Card.Title>Dell Inspiron</Card.Title>
                        <Card.Text>Intel i7 • 16GB RAM • 1TB SSD</Card.Text>
                        <Button variant="primary" className="me-2">Add to Cart</Button>
                        <Button variant="success">Buy Now</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://cdn.moglix.com/p/oyFCxfqhcrD69-xxlarge.jpg"
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Card.Title>Lenovo ThinkPad</Card.Title>
                        <Card.Text>Ryzen 5 • 8GB RAM • 512GB SSD</Card.Text>
                        <Button variant="primary" className="me-2">Add to Cart</Button>
                        <Button variant="success">Buy Now</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Card.Title>MacBook Air</Card.Title>
                        <Card.Text>Apple M1 • 8GB RAM • 256GB SSD</Card.Text>
                        <Button variant="primary" className="me-2">Add to Cart</Button>
                        <Button variant="success">Buy Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Cards;
