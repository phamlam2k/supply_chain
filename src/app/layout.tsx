import React from "react";
import RootProvider from "../lib/providers/RootProvider";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <RootProvider>{children}</RootProvider>
    </body>
  </html>
);

export default RootLayout;
