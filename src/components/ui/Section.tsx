type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

// Contêiner padrão das dobras: gutter de 16px no mobile, largura editorial no desktop.
export function Section({ id, children, className = "", containerClassName = "" }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${containerClassName}`}>{children}</div>
    </section>
  );
}

// Título de dobra — o "H1" de cada seção no copy, em giz dourado.
export function SectionTitle({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={`chalk text-balance text-[1.9rem] leading-[1.25] sm:text-4xl sm:leading-[1.2] lg:text-[2.6rem] ${className}`}
    >
      {children}
    </Tag>
  );
}
