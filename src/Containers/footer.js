import React from "react";
import Footer from "../components/footer";
import { Icon } from "../components/icons/styles/icons";


export function FooterContainers (){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testmonials</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Brasil</Footer.Link>
                    <Footer.Link href="#">Argentina</Footer.Link>
                    <Footer.Link href="#">E.U.A</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f"/> Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram"/>Instagram</Footer.Link>
                    <Footer.Link href="https://www.linkedin.com/feed/"><Icon className="fab fa-linkedin-in"/>Linkedin</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-github-alt"/>GitHub</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>    

        </Footer>
    )
}