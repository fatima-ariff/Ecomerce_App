import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user, isAuthenticated } = useAuth0();


const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2> Contact Page </h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.4149623052!2d74.05350675332247!3d31.482633718723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1674466382001!5m2!1sen!2s" 
    width="100%" 
    height="450" 
    style={{border:0}}
    allowFullScreen="" 
    loading="lazy"
     referrerPolicy="no-referrer-when-downgrade">
     </iframe>
     <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xoqzvbok" method="POST" className="contact-inputs ">
          <input type="text" 
          placeholder="username"
          value={isAuthenticated ?user.name:""}
          name="username"
          required 
          
          autoComplete="off" >
          </input>
          <input type="email" 
          placeholder="Email"
          name="Email"
          value={isAuthenticated ?user.email:""}

          required 
         
          autoComplete="off" >
          </input>
          <textarea 
          name="Message"
          cols="30"
          rows="10"
          required
          autoComplete="off"
          placeholder="Enter your message here "
          
          >

          </textarea>
          <input type="submit" value="Send">
          </input>

        </form>

      </div>

     </div>
  </Wrapper>;
};

export default Contact;
