import React, { useState } from 'react';
import '../styles/ContactPage.css';

// List of contacts
const contacts = [
  { city: 'MUMBAI', address: 'The Addressoffoml Mod House, R-4, Mega Park Lord Industrial Estate, Andheri East, Mumbai, Maharashtra India – 400093', phone: '4432-52000', email: 'mails@globalcity.in' },
  { city: 'HYDERABAD', address: 'IOB, Yashoda Hospitals, Kapadia Lane, Raj Bhavan Road, Hyderabad, Telangana, 500029', phone: '4432-52000', email: 'mails@globalcity.in' },
  { city: 'BANGALORE', address: 'Novel Tech Park, Opposite to Main HSR Road, Bengaluru, Karnataka, 560068', phone: '4432-52000', email: 'mails@globalcity.in' },
  { city: 'CHENNAI', address: 'Kolathur Ameen Complex, Kodambakkam High Road, Tirumangalam, Chennai, Tamil Nadu, 600034', phone: '4432-52000', email: 'mails@globalcity.in' },
  { city: 'COIMBATORE', address: '24B/1 Dindigul Road, Erode Road Signal, Avinashi Road, Coimbatore, Tamil Nadu, 641012', phone: '4432-52000', email: 'mails@globalcity.in' },
  { city: 'ERODE', address: 'Pearl Residency, Opposite to Govt Girls School, Pallipalayam, Erode, Tamil Nadu, 638001', phone: '4432-52000', email: 'mails@globalcity.in' },
  { city: 'MADURAI', address: 'Jagannath Reddy, 50A West Madurai Nagar, Edi Road, Opposite to Madura Mill, Madurai, Tamil Nadu, 625007', phone: '4432-52000', email: 'mails@globalcity.in' },
  { city: 'TRICHY', address: 'No.14, Trichy Road, Opposite to Hotel Rajas, Tiruchirappalli, Tamil Nadu, 620018', phone: '4432-52000', email: 'mails@globalcity.in' },
  { city: 'SALEM', address: 'Salem Business Park, Near Kanjamalai Sub-Registrar Office, Salem, Tamil Nadu, 636001', phone: '4432-52000', email: 'mails@globalcity.in' },
  { city: 'PONDICHERRY', address: '14, Avadi Road, 1st floor, Anna Nagar, Puducherry, Tamil Nadu, 605005', phone: '4432-52000', email: 'mails@globalcity.in' },
  { city: 'NAGERCOIL', address: '7A, VRKSundaram Road, Nagercoil, Tamil Nadu, 629001', phone: '4432-52000', email: 'mails@globalcity.in' },
  { city: 'KANYAKUMARI', address: '28A, X Cross Cut Street, Sira Road, Kanyakumari, Tamil Nadu, 629702', phone: '4432-52000', email: 'mails@globalcity.in' },
];

const ContactPage = () => {
  // State to track the selected contact
  const [selectedContact, setSelectedContact] = useState(null);

  // Handle card click event
  const handleCardClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="cocontact-page">
      <h1 className="con">Contact Us</h1>
      <div className="cocontact-grid">
        {contacts.map((contact, index) => (
          <div 
            key={index} 
            className={`cocontact-card ${selectedContact === contact ? 'clicked' : ''}`}
            onClick={() => handleCardClick(contact)}
          >
            <h2>{contact.city}</h2>
          </div>
        ))}
      </div>
      
      {selectedContact && (
        <div className="cocontact-details">
          <h2>{selectedContact.city} Contact Details</h2>
          <p>{selectedContact.address}</p>
          <p>Phone: {selectedContact.phone}</p>
          <p>Email: <a href={`mailto:${selectedContact.email}`}>{selectedContact.email}</a></p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;