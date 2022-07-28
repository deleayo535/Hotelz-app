import './footer.css';

import { HeartFilled } from '@ant-design/icons';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap footer-bottom">
        <div className="footer-p">
          Copyright ©2022 All rights reserved | This template is made with{' '}
          <HeartFilled />
        </div>
        <div>
          <ul className="footer-wrap">
            <li className="footer-li footer-last">Terms</li>
            <li className="footer-li footer-last">Privacy</li>
            <li className="footer-li footer-last">Compliances</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
