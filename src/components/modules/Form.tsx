import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState<string>("Guest");
  const [quantity, setQuantity] = useState<string>("");
  const [comment, setCommnet] = useState<string>("");
  const [payment, setPayment] = useState<string>("");
  const [shipping, setShipping] = useState<string>("Delivery");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommnet(event.target.value);
  };

  const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShipping(event.target.value);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
        Daraz Checkout Form
      </h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-1">Name</label>
        <input
          value={name}
          onChange={handleNameChange}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your name"
        />
        <p className="text-sm text-gray-500 mt-1">Name: {name}</p>
      </div>

      {/* Quantity */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-1">
          Quantity
        </label>
        <input
          value={quantity}
          onChange={handleQuantityChange}
          type="number"
          min={1}
          max={10}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter quantity"
        />
        <p className="text-sm text-gray-500 mt-1">Quantity: {quantity}</p>
      </div>

      {/* Comment */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-1">
          Delivery Instructions
        </label>
        <textarea
          onChange={handleCommentChange}
          value={comment}
          className="w-full border border-gray-300 p-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter delivery instructions"
        ></textarea>
        <p className="text-sm text-gray-500 mt-1">Comment: {comment}</p>
      </div>

      {/* Payment */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-1">
          Payment Method
        </label>
        <select
          value={payment}
          onChange={handlePaymentChange}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select Payment Method</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="PayPal">PayPal</option>
        </select>
        <p className="text-sm text-gray-500 mt-1">Payment: {payment}</p>
      </div>

      {/* Shipping */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-2">
          Shipping Method
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Pick Up"
              checked={shipping === "Pick Up"}
              onChange={handleShippingChange}
              className="accent-orange-500"
            />
            Pick Up
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Delivery"
              checked={shipping === "Delivery"}
              onChange={handleShippingChange}
              className="accent-orange-500"
            />
            Delivery
          </label>
        </div>
        <p className="text-sm text-gray-500 mt-1">Shipping: {shipping}</p>
      </div>

      {/* Submit (Optional) */}
      <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded">
        Submit Order
      </button>
    </div>
  );
};
