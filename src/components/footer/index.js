import React from 'react';
import {Containers, Wrapper , Row, Column, Link, Title} from './styles/footer'

export default function Footer({ children, ...restProps }){
    return <Containers { ...restProps }>{children} </Containers>
}

Footer.Wrapper = function FooterWrapper({children , ...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}
Footer.Row = function FooterRow({children , ...restProps}){
    return <Row {...restProps}>{children}</Row>
}
Footer.Column = function FooterColumn({children , ...restProps}){
    return <Column {...restProps}>{children}</Column>
}
Footer.Link = function FooterLink({children , ...restProps}){
    return <Link {...restProps}>{children}</Link>
}
Footer.Title = function FooterTitle({children , ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

