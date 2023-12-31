import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from "../context/ShoppingCartContext";


export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="react-shopping-cart/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="react-shopping-cart/Store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="react-shopping-cart/About" as={NavLink}>About</Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button onClick={openCart} variant="outline-primary" className="rounded-circle" style={{ width: "3rem", height: "3rem", position: "relative" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" /> </svg>
                        <div className="rounded-circle bg-danger justify-content-center align-items-center"
                            style={{
                                color: "white",
                                width: "1.5rem",
                                height: '1.5rem',
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%,25%)",

                            }}>{cartQuantity}</div>
                    </Button>
                )}
            </Container>
        </NavbarBs>
    )
}