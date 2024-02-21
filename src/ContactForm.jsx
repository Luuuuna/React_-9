import React, { useState } from "react";

const ContactForm = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");

 const handleSubmit = (e) => {
   e.preventDefault();

   const formData = new FormData();
   formData.append("name", name);
   formData.append("email", email);
   formData.append("message", message);

   // Отправить форму на сервер
//    fetch("/api/submit-form", {
//     method: "POST",
//     body: formData,
//   })
//     .then((response) => {
//       if (response.ok) {
//         setSuccessMessage("Заявка успешно отправлена");
//         setName("");
//         setEmail("");
//         setMessage("");
//       }
//     })
//     .catch((error) => {
//       console.error("Ошибка при отправке заявки:", error);
//     });
// };

//Но так как сервера нет то нет. Если честно очень странно получить в домашнем задании такое условие 
// учитывая, что в учебном видео говориться, что мы не можем отправить данные на сервер т.к сервера у нас нет

   // Очистить поля формы
   setName("");
   setEmail("");
   setMessage("");

   // Отобразить сообщение об успешной отправке
   alert("Ваша заявка успешно отправлена!");
 };

 return (
   <form onSubmit={handleSubmit}>
     <label htmlFor="name">Имя:</label>
     <input
     className="form-item"
       type="text"
       id="name"
       name="name"
       value={name}
       onChange={(e) => setName(e.target.value)}
       required
     />

     <label htmlFor="email">Email:</label>
     <input
     className="form-item"
       type="email"
       id="email"
       name="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required
     />

     <label htmlFor="message">Сообщение:</label>
     <textarea
     className="form-item form-item-textaria"
       id="message"
       name="message"
       value={message}
       onChange={(e) => setMessage(e.target.value)}
       required
     />

     <button type="submit" className="btn" >Отправить</button>
   </form>
 );
};

export default ContactForm;