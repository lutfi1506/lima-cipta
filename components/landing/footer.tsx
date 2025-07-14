const Footer = () => {
  return (
    <footer className="w-full shrink-0 border-t">
      <div className="container flex flex-col gap-2 sm:flex-row py-6 items-center px-4 md:px-6">
        <p className="text-xs text-muted-foreground flex-1">
          &copy; {new Date().getFullYear()} Lima Cipta Digital. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
