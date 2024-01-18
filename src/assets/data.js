export const users = [
  {
    id: 1,
    username: "john_doe",
    fullName: "John Doe",
    email: "john@example.com",
    age: 28,
    address: "123 Main Street, Cityville",
    button: true,
    func: () => prompt("how are you?"),
  },
  {
    id: 2, 
    username: "jane_smith",
    fullName: "Jane AtANS",
    email: "jane@example.com",
    age: 32,
    address: "456 Oak Avenue, Townsville",
    button: false,
    func: () => alert("heyy"),
    img: ""
  },
  {
    id: 3,
    username: "sam_jones",
    fullName: "Sam Jones",
    email: "sam@example.com",
    age: 24,
    address: "789 Pine Road, Villagetown",
    button: "true",
    func: () => confirm("leaving now?"),
  },
  // Add more user objects as needed
];
