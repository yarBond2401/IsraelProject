import React from "react"
import Link from "next/link"
import Image from "next/image"

import { FOOTER_LINKS } from "./constants"
import {
  FooterBody,
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterLinks,
  FooterLinkWrapper,
  FooterWrapper,
  Navigation,
} from "./styled"
const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterBody>
          <Image
            src="/images/svg/header/header-logo-2.png"
            alt="footer-logo"
            width={150}
            height={80}
          />
          <Navigation>
            <FooterLinks>
              {FOOTER_LINKS.map((link, index) => (
                <FooterLinkWrapper key={index}>
                  <FooterLink href="/">{link.title}</FooterLink>
                </FooterLinkWrapper>
              ))}
            </FooterLinks>
          </Navigation>
        </FooterBody>
        <FooterContent>
          <Link style={{ color: "#6e6e6e" }} href="/">
            בינה מלאכותית
          </Link>
          <Image
            src="/images/svg/footer/footer-copy.png"
            width={190}
            height={20}
            alt="footer-copy"
          />
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
