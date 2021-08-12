import React from 'react';
import {Footer} from "./styles";


const FooterView: React.FunctionComponent = () => {
  return <Footer>
    &copy; {new Date().getFullYear()}, All rights reserved
  </Footer>
}

export {FooterView};