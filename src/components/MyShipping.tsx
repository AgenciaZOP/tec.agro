import React from "react"

interface MyShippingProps {
    shipping: Shipping
}

export const MyShipping: React.FC<MyShippingProps> = ({ shipping }) => {
    return <div className="MyShipping-Component"></div>
}
