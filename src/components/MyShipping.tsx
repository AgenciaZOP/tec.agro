import React from "react"

interface MyShippingProps {
    shipping: Shipping | undefined
}

export const MyShipping: React.FC<MyShippingProps> = ({ shipping }) => {
    return <div className="MyShipping-Component">opa</div>
}
