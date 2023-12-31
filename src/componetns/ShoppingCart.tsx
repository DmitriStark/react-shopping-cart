import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../componetns/CartItem";
import { formatCurrency } from "../utilities/formatCurrensy";
import storeItems from "../data/items.json"


type ShoppingCartProps = {
    isOpen: boolean
}

export function ShopingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3} >
                    {cartItems.map(item => (
                        <CartItem key={item.id}{...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total
                        {formatCurrency(cartItems.reduce((total,CartItem)=>{
                                const item = storeItems.find(item => item.id === CartItem.id)
                                return total +(item?.price || 0)*CartItem.quantity

                        },0))}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}