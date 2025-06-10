import Image from "next/image";

function Logo() {
  return (
    <div
      className="flex items-center p-1 logo"
      style={{
        borderRadius: "40px",
        backgroundColor: "var(--accent-secondary)",
      }}
    >
      <div
        className="relative flex items-center justify-center logo-container"
        style={{ width: 55, height: 55 }}
      >
        <Image
          src="/assets/logo-bg.png"
          alt="Logo - Latino Web Studio - Attorneys - Retainers - Cases - Helping Expert Witnesses"
          width={55}
          height={55}
          className="absolute logo-bg"
          style={{
            top: "0%",
            left: "0%",
            transform: "translate(-50%,-50%)",
          }}
        />
        <Image
          src="/assets/logo-bird.png"
          alt="Logo - Latino Web Studio - Attorneys - Retainers - Cases - Helping Expert Witnesses"
          width={40}
          height={40}
          className="relative logo-bird"
        />
      </div>
      <div style={{ paddingLeft: 10, paddingRight: 10, marginTop: -5 }}>
        <span
          className="text-accent d-block text-shadow logo-text"
          style={{ fontSize: "1.2rem", margin: 0, lineHeight: 1 }}
        >
          Latino Web Studio
        </span>
        <p
          className="text-white d-block logo-subtext"
          style={{ margin: 0, fontSize: "70%", lineHeight: 1 }}
        >
          <em>Attorneys - Retainers - Cases</em>
        </p>
      </div>
    </div>
  );
}

export default Logo;
