// src/components/App.tsx
import { useState } from 'react';

import Product from './Product';
import Alert from './Alert';
import UserMenu from './UserMenu';
import Count from './Count';
import Form from './Form/Form';
import Modal from './Modal/Modal';

export default function App() {
  const [usernames, setUsernames] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUser = (username: string) => {
    setUsernames(prevUsernames => [...prevUsernames, username]);
  };

  return (
    <>
      <Form onSubmit={handleUser} />
      <ul>
        {usernames.map((username, index) => {
          return <li key={index}>{username}</li>;
        })}
      </ul>
      <button onClick={openModal}>Open modal</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Custom Modal Content</h2>
          <p>This is a reusable modal with dynamic content.</p>
        </Modal>
      )}
      <h1>Best selling {import.meta.env.VITE_API_KEY}</h1>
      <Product name="Tacos With Lime" imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640" price={10.99} />
      <Product name="Fries and Burger" imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640" price={14.29} />
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
      <UserMenu name="placeholder" />
      <Count />
    </>
  );
}
