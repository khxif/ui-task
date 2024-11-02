export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto py-5 border-t-[1px] border-t-[#DCDFE4]">
      <div className="flex  justify-between">
        <span className="flex items-start flex-col space-y-2">
          <h1 className="text-xl text-secondary font-medium">Laminate</h1>
          <p className="text-xs text-secondary">©️ Laminate</p>
        </span>

        <div className="py-8 flex justify-between space-x-40">
          <ul className="text-secondary text-sm flex flex-col space-y-4">
            <li className="font-semibold pb-2">MENU</li>
            <li>Components</li>
            <li>Live Preview</li>
            <li>Documentation</li>
          </ul>

          <ul className="text-secondary text-sm flex flex-col space-y-4">
            <li className="font-semibold pb-2">LEGAL</li>
            <li>License</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>

          <ul className="text-secondary text-sm flex flex-col space-y-4">
            <li className="font-semibold pb-2">SOCIAL</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
