import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';

export default function FooterIbo() {
  return <footer className="apple-footer"><div className="footer-inner"><div className="footer-breadcrumb"><AiFillApple /> <FiChevronRight /> Mac</div><div className="footer-columns"><div><strong>Explore Mac</strong><a href="#top">Explore All Mac</a><a href="#explore">MacBook Air</a><a href="#explore">MacBook Pro</a><a href="#explore">iMac</a></div><div><strong>Shop Mac</strong><a href="#explore">Shop Mac</a><a href="#explore">Mac Accessories</a><a href="#explore">Compare Mac</a></div><div><strong>More from Mac</strong><a href="#explore">Mac Support</a><a href="#explore">macOS</a><a href="#explore">Continuity</a></div></div><p className="footer-note">More ways to shop: visit an Apple Store, call 1-800-MY-APPLE, or find a reseller near you.</p><div className="footer-bottom"><span>Copyright © 2026 Apple Inc. All rights reserved.</span><span>Privacy Policy　|　Terms of Use　|　Sales Policy　|　Legal　|　Site Map</span></div></div></footer>;
}
