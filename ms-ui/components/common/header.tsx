import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { Header, Logo, LogoImage } from "./styles";

const HeaderView: React.FunctionComponent = () => {
  const router = useRouter();

  const handleNav = useCallback(() => router.push("/"), []);
  return (
    <Header>
      <Logo>
        <LogoImage src="/logo.png" onClick={handleNav} />
      </Logo>
    </Header>
  );
};

export { HeaderView };
