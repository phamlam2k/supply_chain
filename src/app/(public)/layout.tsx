import Image from "next/image";
export default function PublicLayout({ children }: React.PropsWithChildren) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        padding: 16,
        flexDirection: "column",
      }}
    >
      <Image width={200} height={100} src="/amazon.jpg" alt="logo" />
      {children}
    </div>
  );
}
