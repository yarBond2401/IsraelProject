import React from "react"
import Link from "next/link"
import Image from "next/image"

import {
  FooterBody,
  FooterContainer,
  FooterContent,
  FooterWrapper,
} from "./styled"
const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterBody>
          <Link href="/">
            <Image
              src="/images/svg/footer/footer-logo.png"
              alt="footer-logo"
              width={174}
              height={70}
            />
          </Link>
          {/* <Navigation>
            <FooterLinks>
              {FOOTER_LINKS.map((link, index) => (
                <FooterLinkWrapper key={index}>
                  <FooterLink href="/">{link.title}</FooterLink>
                </FooterLinkWrapper>
              ))}
            </FooterLinks>
          </Navigation> */}
        </FooterBody>
        <FooterContent>
          {/* <Link style={{ color: "#6e6e6e" }} href="/">
            בינה מלאכותית
          </Link> */}
          <Image
            src="/images/svg/footer/footer-copy.svg"
            width={80}
            height={47}
            alt="footer-copy"
          />
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
