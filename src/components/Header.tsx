import { Button } from "@mui/material";

export default function Header() {
  return (
    <header className="bg-[#121621] py-4 text-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-semibold">Laminate</h1>

        <Button variant="contained" className="rounded-lg bg-gradient-to-br from-[#635BFF] to-[#4E36F5]">
          Purchase Now
        </Button>
      </nav>
    </header>
  );
}
