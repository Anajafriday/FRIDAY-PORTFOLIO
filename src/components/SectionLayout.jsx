function SectionLayout({
  children,
  className = "bg-colorPrimary",
  classNameChild = " w-9/12",
}) {
  return (
    <section className={` ${className} py-20`}>
      <div className={` ${classNameChild} mx-auto bg-red-5`}>{children}</div>
    </section>
  );
}

export default SectionLayout;
