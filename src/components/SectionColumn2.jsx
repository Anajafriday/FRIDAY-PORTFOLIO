import SectionLayout from "./SectionLayout";

function SectionColumn2({ children, className, paramParent }) {
  return (
    <SectionLayout className={"" || paramParent}>
      <div
        className={`flex ${className} justify-center flex-col md:flex-row gap-8 -mb-14`}
      >
        {children}
      </div>
    </SectionLayout>
  );
}

export default SectionColumn2;
