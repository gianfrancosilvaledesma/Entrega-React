// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdKCOuWv2GRFB2DkWSOGb1gy593FWBSwM",
  authDomain: "reactcoder-a82b7.firebaseapp.com",
  projectId: "reactcoder-a82b7",
  storageBucket: "reactcoder-a82b7.firebasestorage.app",
  messagingSenderId: "1029908363501",
  appId: "1:1029908363501:web:18eeee20e5373b9764b4e4",
  measurementId: "G-7WQNZ1Z90M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);




import { collection, doc, writeBatch } from "firebase/firestore"; 

const misProductos = [
    {id: 1, nombre: "Cerveza Rubia", precio: 300, img:"../public/img/cerveza-rubia-resized.webp"},
    {id: 2, nombre: "Cerveza Roja", precio: 250, img:"../public/img/una-cerveza-roja-resized.png"},
    {id: 3, nombre: "Cerveza Negra", precio: 310, img:"../public/img/una-cerveza-negra-resized.png"},
    {id: 4, nombre: "Cerveza Ipa", precio: 900, img:"../public/img/una-cerveza-ipa-resized.png"},
]

const subirProductos = async () => {
  const batch = writeBatch(db); // Crear un batch
  const productosRef = collection(db, "productos"); // Referencia a la colección

  // Recorre el array de productos
  misProductos.forEach((producto) => {
    const nuevoDoc = doc(productosRef, producto.id.toString()); // Crea un nuevo documento con un ID automático
    batch.set(nuevoDoc, producto); // Agrega la operación de escritura al batch
  });

  // Ejecuta el batch
  try {
    await batch.commit();
    console.log("Productos subidos exitosamente");
  } catch (error) {
    console.error("Error subiendo productos: ", error);
  }
};
//   subirProductos()
